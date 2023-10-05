import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { useNavigation, useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { Button, CheckBox, Container, Text } from "~/components";
import { IconsEnum, ScreenNamesEnum } from "~/enums";
import { TutorialCompletedScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";
import { UserHasAcceptedTAC } from "~/storage/type";

import { createStyles } from "./styles";

const TutorialCompleted: FC<TutorialCompletedScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { navigate } =
    useNavigation<TutorialCompletedScreenProps["navigation"]>();
  const { t: translate } = useTranslation();

  const [accepted, setAccepted] = useState(false);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  useEffect(() => {
    const checkAcceptance = async () => {
      const terms = await Storage.getDataAsync<UserHasAcceptedTAC>(
        "accepted_tac",
      );
      !!terms && setAccepted(terms.accepted);
    };
    void checkAcceptance();
  }, []);

  const handleAcceptTAC = () => {
    setAccepted(!accepted);
  };

  const handleAcceptDisclaimer = () => {
    setAcceptedDisclaimer(!acceptedDisclaimer);
  };

  const onContinuePress = () => {
    navigate(ScreenNamesEnum.Social);
    void Storage.setDataAsync("accepted_tac", { accepted: true });
  };

  const onTermsAndConditionsPress = () => {
    navigate(ScreenNamesEnum.TermsAndConditions);
  };

  const onPrivacyPolicyPress = () => {
    navigate(ScreenNamesEnum.PrivacyPolicy);
  };

  return (
    <Container type="light" scrollable={true}>
      <View style={styles.contentContainer}>
        <Icon
          width={moderateScale(49)}
          height={moderateScale(49)}
          name={IconsEnum.CheckLine}
        />
        <View style={styles.centerContainer}>
          <Text type="title" color="textNegative">
            {translate("tutorial_completed.title")}
          </Text>
        </View>
        <Text color="textNegative" customStyle={styles.paragraph}>
          {translate("tutorial_completed.subtitle")}
        </Text>
      </View>
      <View style={styles.termsAndConditionsBox}>
        <CheckBox handleCheck={handleAcceptTAC} userHasAcceptedTAC={accepted} />
        <View style={styles.termsAndConditionsTextBox}>
          <Text color="textNegative" customStyle={styles.text}>
            {translate("tutorial_completed.checkbox_prefix")}
          </Text>
          <TouchableOpacity onPress={onTermsAndConditionsPress}>
            <Text
              color="textNegative"
              customStyle={styles.termsAndConditionsText}>
              {translate("shared.terms_and_conditions")}
            </Text>
          </TouchableOpacity>
          <Text color="textNegative" customStyle={styles.text}>
            {translate("tutorial_completed.and")}
          </Text>
          <TouchableOpacity onPress={onPrivacyPolicyPress}>
            <Text
              color="textNegative"
              customStyle={styles.termsAndConditionsText}>
              {translate("shared.privacy_policy")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.termsAndConditionsBox}>
        <CheckBox
          handleCheck={handleAcceptDisclaimer}
          userHasAcceptedTAC={acceptedDisclaimer}
        />
        <View style={styles.termsAndConditionsTextBox}>
          <Text color="textNegative" customStyle={styles.text}>
            {translate("tutorial_completed.checkbox_disclaimer")}
          </Text>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <Button
          onPress={onContinuePress}
          label={translate("shared.cta_continue")}
          customLabelStyle={
            accepted && acceptedDisclaimer ? styles.label : styles.disabledLabel
          }
          style={
            accepted && acceptedDisclaimer
              ? styles.continueButton
              : styles.disabledContinue
          }
          disabled={!accepted || !acceptedDisclaimer}
        />
      </View>
    </Container>
  );
};

export default TutorialCompleted;
