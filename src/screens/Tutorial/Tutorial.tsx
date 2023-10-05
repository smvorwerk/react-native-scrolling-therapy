import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { BackHandler, Modal, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { moderateScale } from "react-native-size-matters";
import analytics from "@react-native-firebase/analytics";

import {
  CommonActions,
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import {
  ActionIndicator,
  CamWebview,
  DefaultModal,
  ExpressionEmoji,
  FaceLandmarks,
  ScrollIndicator,
  Text,
} from "~/components";
import { CamRef } from "~/components/CamWebview/CamWebview";
import { ScrollIndicatorRef } from "~/components/ScrollIndicator/types";
import { configs } from "~/constants";
import { EventsEnum, IconsEnum, ScreenNamesEnum } from "~/enums";
import { useTutorialSteps } from "~/hooks";
import { TutorialScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";
import { UserHasAcceptedTAC } from "~/storage/type";

import { LandMarks } from "../Social/types";

import { createStyles } from "./styles";

const { JS } = configs;

let finishedExpressions = [] as string[];

const Tutorial: FC<TutorialScreenProps> = () => {
  const { navigate, dispatch } =
    useNavigation<TutorialScreenProps["navigation"]>();
  const theme = useTheme();
  const { t: translate, i18n } = useTranslation();
  const { expressionTimes, steps } = useTutorialSteps();

  const styles = createStyles(theme);

  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  const [currentExpression, setCurrentExpression] = useState("");
  const [currentStep, setCurrentStep] = useState(-1);
  const [currentExpressionTimes, setCurrentExpressionTimes] = useState(0);
  const [awaitingStepTransition, setAwaitingStepTransition] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCantSkipModal, setShowCantSkipModal] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [alert, setAlert] = useState(translate("tutorial.initial_message"));
  const [landmarks, setLandmarks] = useState<LandMarks>({} as LandMarks);

  const camRef = useRef<CamRef>(null);
  const actionIndicatorRef = useRef<ScrollIndicatorRef>(null);

  useFocusEffect(
    useCallback(() => {
      // reset the webview controls
      setStart(false);
      setLoading(true);
      setLandmarks({} as LandMarks);
      setAlert(translate("tutorial.initial_message"));
      setShowEmoji(false);
      setCurrentStep(-1);

      // Starts the tutorial after displaying the message center the camera for 5 seconds
      setTimeout(() => {
        setCurrentStep(0);
        updateAlertMessage(0);
      }, 5000);

      //Remove Android hardware back bottom default event
      const backhandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => true,
      );

      return () => {
        backhandler.remove();
      };
    }, []),
  );

  useEffect(() => {
    camRef.current?.injectJsOnCamView(JS.runOnLoad);
  }, [loading]);

  useEffect(() => {
    if (start) {
      camRef.current?.injectJsOnCamView(JS.addChangeExpEvent);
      camRef.current?.injectJsOnCamView(JS.addChangeLandmarksEvent);
    }
  }, [start]);

  // Users expression handler
  useEffect(() => {
    if (currentStep >= 0 && !awaitingStepTransition) {
      const { expression } = steps[currentStep];

      if (expression === currentExpression) {
        if (currentExpressionTimes + 1 <= expressionTimes) {
          setCurrentExpressionTimes(currentExpressionTimes + 1);
        }
      }
    }
  }, [currentExpression]);

  // Animation and currentStep handler
  useEffect(() => {
    if (currentExpressionTimes > 0) {
      setAwaitingStepTransition(true);
      // First the bottom message is set and the emoji and the action animation run
      setAlert(steps[currentStep].success);
      runEmojiAnimation();
      runActionAnimation();
      // 1,5 second later, the modal is open to show the pending expression completion
      setTimeout(() => {
        setShowModal(true);
      }, 1500);
      // 2,5 seconds later, the modal is closed, the action animation is reset and
      // the next step/expression is handled
      setTimeout(async () => {
        setShowEmoji(false);
        setShowModal(false);
        resetActionAnimation();
        setAwaitingStepTransition(false);
        await next();
      }, 4000);
    }
  }, [currentExpressionTimes, i18n.language]);

  const updateAlertMessage = (currentStep: number) => {
    setAlert(steps[currentStep].msg);
  };

  const handleFinishTutorial = async () => {
    setShowModal(false);

    void Storage.setDataAsync("user_tutorial", { done: true });

    const data = await Storage.getDataAsync<UserHasAcceptedTAC>("accepted_tac");
    const hasAcceptedTAC = !!data?.accepted;

    if (finishedExpressions.length === steps.length) {
      finishedExpressions = [];
      setCurrentExpressionTimes(0);
    }

    await analytics().logTutorialComplete();

    const screen = hasAcceptedTAC
      ? ScreenNamesEnum.Social
      : ScreenNamesEnum.TutorialCompleted;

    navigate(screen);
  };

  const handleUpdateExpression = (currentStep: number) => {
    setCurrentStep(currentStep);
    setCurrentExpressionTimes(0);
    updateAlertMessage(currentStep);
  };

  const getNextStep = () => {
    return steps.indexOf(
      steps.filter(
        step => !finishedExpressions.includes(step["expression"]),
      )[0],
    );
  };

  const next = async () => {
    if (currentExpressionTimes === 3) {
      if (currentStep + 1 < steps.length) {
        setCurrentStep(currentStep + 1);
        setCurrentExpressionTimes(0);

        updateAlertMessage(currentStep + 1);
      } else {
        void Storage.setDataAsync("user_tutorial", { done: true });
      }
      finishedExpressions.push(steps[currentStep].expression);

      if (finishedExpressions.length === steps.length) {
        await handleFinishTutorial();
      } else {
        handleUpdateExpression(getNextStep());
      }
    } else {
      updateAlertMessage(currentStep);
    }
  };

  // Aux functions
  const runEmojiAnimation = () => {
    setShowEmoji(true);
  };

  const runActionAnimation = () => {
    actionIndicatorRef.current?.runAnimation();
  };

  const resetActionAnimation = () => {
    actionIndicatorRef.current?.resetAnimation();
  };

  const setExpression = (expression: string) => {
    setCurrentExpression(expression);
  };

  const onStart = () => {
    setStart(true);
  };

  const onLoad = () => {
    setLoading(false);
  };

  const ActionIndicatorFeedback = useCallback(() => {
    switch (steps[currentStep].action) {
      case "scroll down":
        return (
          <View style={styles.feedbackAnimationContainer}>
            <ScrollIndicator ref={actionIndicatorRef} />
          </View>
        );
      case "scroll up":
        return (
          <View style={styles.feedbackAnimationContainer}>
            <ScrollIndicator scrollDirection="up" ref={actionIndicatorRef} />
          </View>
        );
      case "play":
        return (
          <View style={styles.feedbackAnimationContainer}>
            <ActionIndicator icon={IconsEnum.Play} ref={actionIndicatorRef} />
          </View>
        );
      case "like":
        return (
          <View style={styles.feedbackAnimationContainer}>
            <ActionIndicator icon={IconsEnum.Like} ref={actionIndicatorRef} />
          </View>
        );
      case "swipe":
        return (
          <View style={styles.feedbackAnimationContainer}>
            <ActionIndicator icon={IconsEnum.Swipe} ref={actionIndicatorRef} />
          </View>
        );
      default:
        return <></>;
    }
  }, [currentStep]);

  const onSkipPress = async () => {
    // const data = await Storage.getDataAsync<UserTutorial>("user_tutorial");
    // const hasFinishedTutorial = !!data?.done;
    // hasFinishedTutorial ? await handleFinishTutorial() : setShowCantSkipModal(true);

    //Temporary workaround. Uncomment lines above and delete line below when it goes to prod.
    await analytics().logEvent(EventsEnum.TutorialSkipped);
    await handleFinishTutorial();
  };

  const onContinueModalPress = () => {
    setShowCantSkipModal(!showCantSkipModal);
  };

  const onLogoPress = () => {
    dispatch(CommonActions.navigate({ name: ScreenNamesEnum.Home }));
  };

  const isFirstStep = () => {
    return currentStep === 0;
  };

  const isLastStep = () => {
    return currentStep + 1 === steps.length;
  };

  const nextStep = () => {
    if (!isLastStep()) handleUpdateExpression(currentStep + 1);
  };

  const prevStep = () => {
    if (!isFirstStep()) handleUpdateExpression(currentStep - 1);
  };

  return (
    <View style={styles.view}>
      <CamWebview
        ref={camRef}
        injectJS={JS.runOnMount}
        isTutorial={true}
        {...{ start, setExpression, setLandmarks, onStart, onLoad }}
      />
      {landmarks?.landmarks && (
        <FaceLandmarks landmarks={landmarks.landmarks} />
      )}

      {currentStep >= 0 && (
        <>
          <ActionIndicatorFeedback />
          <ExpressionEmoji icon={showEmoji ? steps[currentStep].icon : null} />
        </>
      )}

      {start && (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={onLogoPress}>
              <Icon name={IconsEnum.Logo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSkipPress}>
              <Text
                type="title"
                customStyle={showCantSkipModal && styles.skipLabel}>
                {translate("shared.cta_skip_tutorial")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alert}>
            <Text type="title" color="text" customStyle={styles.alertText}>
              {alert}
            </Text>
          </View>
        </>
      )}

      {currentStep >= 0 && (
        <>
          <View style={styles.scrollableArea}>
            <GestureHandlerRootView>
              <PanGestureHandler
                onGestureEvent={e => {
                  if (e.nativeEvent.velocityY) setShowModal(true);
                }}>
                <View style={styles.scrollableAreaView}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      setShowModal(true);
                    }}>
                    <Icon
                      name={IconsEnum.ArrowUp}
                      style={styles.scrollableIcon}
                      width={moderateScale(40)}
                      height={moderateScale(40)}
                    />
                  </TouchableOpacity>
                </View>
              </PanGestureHandler>
            </GestureHandlerRootView>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              setShowModal(false);
            }}>
            <TouchableOpacity
              style={styles.container}
              activeOpacity={1}
              onPress={() => {
                setShowModal(false);
              }}>
              <View style={styles.modal}>
                <View style={styles.navigation}>
                  <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={prevStep}>
                    <Icon name={IconsEnum.Prev} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={nextStep}>
                    <Icon name={IconsEnum.Next} />
                  </TouchableOpacity>
                </View>
                <Icon style={styles.modalIcon} name={steps[currentStep].icon} />
                <Text
                  type="header"
                  color="textNegative"
                  customStyle={styles.modalTitle}>
                  {steps[currentStep].title}
                </Text>
                <Text color="textNegative" customStyle={styles.modalText}>
                  {translate("tutorial.repeat_message")}
                </Text>
                <View style={styles.expressionNavigation}>
                  {steps.map((step, i) => {
                    const fill = finishedExpressions.includes(
                      step["expression"],
                    )
                      ? theme.colors.primary
                      : currentStep === i
                      ? theme.colors.shadow
                      : theme.colors.disabledTutorialIcon;

                    return (
                      <TouchableOpacity
                        key={i}
                        style={styles.expressionNavigationIcon}
                        onPress={() => {
                          handleUpdateExpression(i);
                        }}>
                        <Icon name={step["icon"]} fill={fill} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      )}

      <DefaultModal
        buttonLabel={translate("shared.cta_continue")}
        onPress={onContinueModalPress}
        visible={showCantSkipModal}>
        <Icon style={styles.modalIcon} name={IconsEnum.Error} />
        <Text color="textNegative" customStyle={styles.modalText}>
          {translate("tutorial.cannot_skip_message")}
        </Text>
      </DefaultModal>
    </View>
  );
};

export default Tutorial;
