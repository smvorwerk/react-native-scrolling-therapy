import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Platform, StatusBar, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import analytics from "@react-native-firebase/analytics";

import { Icon } from "~/assets/icons";
import { Button, Container, Dropdown, Text } from "~/components";
import { IconsEnum, ScreenNamesEnum } from "~/enums";
import { LanguageType, useLanguage } from "~/hooks";
import { LanguageScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";

import { createStyles } from "./styles";

const Language: FC<LanguageScreenProps> = () => {
  const styles = createStyles();
  const { t: translate, i18n } = useTranslation();
  const languages = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(({ key }) => key === i18n.language) || languages[0],
  );

  const { replace } = useNavigation<LanguageScreenProps["navigation"]>();

  StatusBar.setBarStyle("light-content", true);
  if (Platform.OS === "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }

  useEffect(() => {
    setSelectedLanguage(
      languages.find(({ key }) => key === i18n.language) || languages[0],
    );
  }, [languages]);

  const handleChangeLanguage = async (language: LanguageType) => {
    await Promise.all([
      analytics().setUserProperty("selected_language", language.key),
      i18n.changeLanguage(language.key),
    ]).catch(err => console.warn(err.message));
  };

  const handleSelectLanguage = async () => {
    await Promise.all([
      Storage.setDataAsync("language", { language: selectedLanguage.key }),
    ]).catch(err => console.warn(err.message));
    replace(ScreenNamesEnum.Home);
  };

  return (
    <Container
      type="dark"
      backgroundVideo={require("../../assets/videos/welcomeBackground.mp4")}>
      <Icon name={IconsEnum.Logo} />
      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
          <Text type="header">{translate("language.title")}</Text>
          <Text customStyle={styles.paragraph}>
            {translate("language.subtitle")}
          </Text>
          <Dropdown
            selected={selectedLanguage}
            onSelect={handleChangeLanguage}
            data={languages}
          />
        </View>
        <Button
          style={styles.button}
          label={translate("shared.cta_continue")}
          onPress={handleSelectLanguage}
        />
      </View>
    </Container>
  );
};

export default Language;
