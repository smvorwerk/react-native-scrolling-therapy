import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { useNavigation, useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

import { Icon } from "~/assets/icons";
import { Button, Container, Text } from "~/components";
import { EventsEnum, ScreenNamesEnum } from "~/enums";
import { useTutorialSteps } from "~/hooks";
import { DrawerParamList, TutorialStartScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";
import { UserHasAcceptedTAC, UserTutorial } from "~/storage/type";

import { createStyles } from "./styles";

const TutorialStart: FC<TutorialStartScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { t: translate } = useTranslation();
  const { steps } = useTutorialSteps();

  const [showSkip, setShowSkip] = useState(true);

  const { navigate } = useNavigation<TutorialStartScreenProps["navigation"]>();

  const navigateTo = (screen: keyof DrawerParamList) => {
    navigate(screen);
  };

  const onPressSkip = async () => {
    const data = await Storage.getDataAsync<UserHasAcceptedTAC>("accepted_tac");
    const hasAcceptedTAC = !!data?.accepted;

    const screen = hasAcceptedTAC
      ? ScreenNamesEnum.Social
      : ScreenNamesEnum.TutorialCompleted;

    await analytics().logEvent(EventsEnum.TutorialSkipped);
    navigateTo(screen);
  };

  const firstAccessCheck = async () => {
    const data = await Storage.getDataAsync<UserTutorial>("user_tutorial");
    const hasFinishedTutorial = !!data?.done;

    !hasFinishedTutorial && setShowSkip(false);
  };

  useEffect(() => {
    void firstAccessCheck();
  }, []);

  return (
    <Container type="light">
      <View style={styles.contentContainer}>
        <Text type="header" color="textNegative">
          {translate("tutorial_start.title")}
        </Text>
        <Text customStyle={styles.paragraph} color="textNegative">
          {translate("tutorial_start.subtitle")}
        </Text>
        {steps.map(item => (
          <View key={item.action} style={styles.itemContainer}>
            <Icon
              width={moderateScale(44)}
              height={moderateScale(44)}
              name={item.icon}
            />
            <Text color="textNegative" customStyle={styles.itemText}>
              {item.title}
            </Text>
          </View>
        ))}
        <View style={styles.buttonsContainer}>
          <Button
            onPress={async () => {
              await analytics().logTutorialBegin();
              navigateTo(ScreenNamesEnum.Tutorial);
            }}
            label={translate("tutorial_start.cta_next")}
            customLabelStyle={styles.darkLabel}
            style={showSkip ? styles.nextButton : styles.nextButtonFullWidth}
          />
          {showSkip && (
            <Button
              onPress={onPressSkip}
              label={translate("shared.cta_skip_tutorial")}
              customLabelStyle={styles.darkLabel}
              style={styles.skipButton}
            />
          )}
        </View>
      </View>
    </Container>
  );
};

export default TutorialStart;
