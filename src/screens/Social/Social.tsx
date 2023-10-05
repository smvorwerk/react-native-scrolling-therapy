import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppState, View } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import {
  CamWebview,
  DefaultModal,
  ExpressionEmoji,
  SocialWebview,
  Text,
} from "~/components";
import { CamRef } from "~/components/CamWebview/CamWebview";
import LoadingScreen from "~/components/LoadingScreen/LoadingScreen";
import { SocialRef } from "~/components/SocialWebview/SocialWebview";
import { configs, EXPRESSION } from "~/constants";
import { useHeader } from "~/contexts/HeaderContext";
import { useSocialRoute } from "~/contexts/SocialRouteContext";
import { CameraAlignmentEnum, ExpressionsEnum, IconsEnum } from "~/enums";
import { SocialScreenProps } from "~/navigation/types";

import { createStyles } from "./styles";
import { ExpressionCall } from "./types";

const { JS } = configs;

const Social: FC<SocialScreenProps> = () => {
  const styles = createStyles();
  const { social } = useSocialRoute();
  const { url: socialUrl, js: socialJs } = social;
  const { t: translate } = useTranslation();
  const navigation = useNavigation();

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  const [cameraAlignment, setCameraAlignment] = useState<CameraAlignmentEnum>(
    CameraAlignmentEnum.Center,
  );
  const [currentExpression, setCurrentExpression] = useState<ExpressionsEnum>(
    ExpressionsEnum.Neutral,
  );
  const [currentIcon, setCurrentIcon] = useState<IconsEnum | null>(null);
  const [isAlignCameraModalVisible, setIsAlignCameraModalVisible] =
    useState(false);
  const [isCongratsModalVisible, setIsCongratsModalVisible] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const camRef = useRef<CamRef>(null);
  const socialRef = useRef<SocialRef>(null);
  const eventRef = useRef<NodeJS.Timeout>();
  const cameraAlignmentTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { setIsEnabled, expressionsCount, hasCountDownFinished, isDrawerOpen } =
    useHeader();

  useEffect(() => {
    const listener = AppState.addEventListener("change", nextState => {
      if (nextState === "active") {
        setIsAlignCameraModalVisible(false);
      }
    });
    const unsubscribeBlur = navigation.addListener("blur", () => {
      setIsAlignCameraModalVisible(false);
    });
    return () => {
      unsubscribeBlur();
      listener.remove();
    };
  }, []);

  useEffect(() => {
    camRef.current?.injectJsOnCamView(JS.runOnLoad);
  }, [loading]);

  useEffect(() => {
    if (start) {
      camRef.current?.injectJsOnCamView(JS.addChangeExpEvent);
      camRef.current?.injectJsOnCamView(JS.addChangeAlignment);
    }
  }, [start]);

  useEffect(() => {
    if (ready) {
      socialRef.current?.injectJsOnSocialView(socialJs.domHelper);
      socialRef.current?.injectJsOnSocialView(socialJs.runOnStart);
    }
  }, [ready]);

  useEffect(() => {
    if (!isUserLoggedIn && cameraAlignmentTimerRef?.current) {
      clearTimeout(cameraAlignmentTimerRef.current);
    }
    setIsAlignCameraModalVisible(false);
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (isUserLoggedIn && !isDrawerOpen) {
      if (cameraAlignment === CameraAlignmentEnum.Center) {
        if (cameraAlignmentTimerRef?.current) {
          clearTimeout(cameraAlignmentTimerRef.current);
          cameraAlignmentTimerRef.current = null;
        }
        setIsAlignCameraModalVisible(false);
        return;
      }
      if (!cameraAlignmentTimerRef.current) {
        cameraAlignmentTimerRef.current = setTimeout(() => {
          if (isUserLoggedIn && !isDrawerOpen) {
            setIsEnabled(false);
            setIsAlignCameraModalVisible(true);
          }
        }, 8000);
      }
    }
  }, [cameraAlignment]);

  useEffect(() => {
    if (isUserLoggedIn) {
      const expressions: ExpressionCall = {
        [ExpressionsEnum.Happy]: () =>
          socialRef.current?.injectJsOnSocialView(socialJs.like),
        [ExpressionsEnum.Surprised]: () =>
          socialRef.current?.injectJsOnSocialView(socialJs.scroll),
        [ExpressionsEnum.Angry]: () =>
          socialRef.current?.injectJsOnSocialView(socialJs.next),
        [ExpressionsEnum.Disgusted]: () =>
          socialRef.current?.injectJsOnSocialView(socialJs.scrollUp),
        [ExpressionsEnum.Sad]: () =>
          socialRef.current?.injectJsOnSocialView(socialJs.play),
      };
      expressions[currentExpression]?.();

      setCurrentIcon(EXPRESSION.EMOJIS[currentExpression]);

      if (currentExpression === ExpressionsEnum.Neutral) {
        eventRef.current = setTimeout(() => setIsEnabled(false), 5000);
      }

      if (isDrawerOpen) setIsEnabled(false);

      if (
        [
          ExpressionsEnum.Happy,
          ExpressionsEnum.Surprised,
          ExpressionsEnum.Angry,
          ExpressionsEnum.Sad,
          ExpressionsEnum.Disgusted,
        ].includes(currentExpression) &&
        !isDrawerOpen
      ) {
        clearTimeout(eventRef.current);
        expressionsCount.current[currentExpression]++;
        setIsEnabled(true);
      }
    }
  }, [currentExpression, isDrawerOpen]);

  useEffect(() => {
    if (hasCountDownFinished) {
      setIsCongratsModalVisible(true);
    }
  }, [hasCountDownFinished]);

  useFocusEffect(
    useCallback(() => {
      setStart(false);
      setLoading(true);
      if (cameraAlignmentTimerRef?.current) {
        clearTimeout(cameraAlignmentTimerRef.current);
        cameraAlignmentTimerRef.current = null;
      }
      setIsAlignCameraModalVisible(false);

      return () => {
        setIsEnabled(false);
      };
    }, []),
  );

  const onLoadingSocialWebView = (loading: boolean) => {
    setReady(false);

    if (!loading)
      setTimeout(() => {
        setReady(true);
        socialRef.current?.injectJsOnSocialView(socialJs.isUserLoggedIn);
      }, 2500);
  };

  const setExpression = (expression: ExpressionsEnum) => {
    setTimeout(() => {
      setCurrentExpression(expression);
    }, 750);
  };

  const onStart = () => {
    setStart(true);
  };

  const onLoad = () => {
    setLoading(false);
  };

  const closeModal = () => {
    setIsCongratsModalVisible(false);
  };

  return (
    <View style={styles.view}>
      {!ready && <LoadingScreen />}

      <Text color="textNegative" customStyle={styles.expression}>
        {currentExpression}
      </Text>
      <CamWebview
        ref={camRef}
        injectJS={JS.runOnMount}
        {...{ start, setExpression, setCameraAlignment, onStart, onLoad }}
      />
      <SocialWebview
        ref={socialRef}
        injectJS={socialJs.domHelper}
        uri={socialUrl}
        {...{ start, onLoading: onLoadingSocialWebView, setIsUserLoggedIn }}
      />

      {isUserLoggedIn && !isDrawerOpen && (
        <ExpressionEmoji icon={currentIcon} />
      )}

      <DefaultModal
        visible={isAlignCameraModalVisible && isUserLoggedIn && !isDrawerOpen}>
        <View style={styles.modalContent}>
          <Icon name={IconsEnum.AlignCamera} />
          <Text
            type="header"
            color="textNegative"
            customStyle={styles.modalTitle}>
            {translate("social.face_detection")}
          </Text>
          <Text
            type="paragraph"
            color="textNegative"
            customStyle={styles.modalDescription}>
            {translate("social.align_camera")}
          </Text>
        </View>
      </DefaultModal>

      <DefaultModal
        buttonLabel={translate("shared.cta_continue")}
        onRequestClose={closeModal}
        visible={isCongratsModalVisible}
        onPress={closeModal}>
        <View style={styles.modalContent}>
          <Icon name={IconsEnum.CheckLine} />
          <Text
            type="header"
            color="textNegative"
            customStyle={styles.modalTitle}>
            {translate("social.congrats")}
          </Text>
          <Text
            type="paragraph"
            color="textNegative"
            customStyle={styles.modalDescription}>
            {translate("social.exercise_completed_title")}
          </Text>
        </View>
      </DefaultModal>
    </View>
  );
};

export default Social;
