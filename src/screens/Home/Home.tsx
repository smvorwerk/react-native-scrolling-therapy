import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Platform, StatusBar, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

import { Icon } from "~/assets/icons";
import { Button, Container, Text } from "~/components";
import { configs } from "~/constants";
import { SOCIAL_TYPE } from "~/constants";
import { useSocialRoute } from "~/contexts/SocialRouteContext";
import { EventsEnum, IconsEnum, ScreenNamesEnum } from "~/enums";
import { ENV_NAME } from "~/environment";
import { HomeScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";
import { UserTutorial } from "~/storage/type";

import { createStyles } from "./styles";

const Home: FC<HomeScreenProps> = () => {
  const { SOCIALS } = configs;
  const styles = createStyles();
  const { t: translate } = useTranslation();

  const { replace } = useNavigation<HomeScreenProps["navigation"]>();

  const { setSocial } = useSocialRoute();

  const onSocialPress = async (social: SOCIAL_TYPE) => {
    const data = await Storage.getDataAsync<UserTutorial>("user_tutorial");
    const hasFinishedTutorial = !!data?.done;

    const screen = hasFinishedTutorial
      ? ScreenNamesEnum.Social
      : ScreenNamesEnum.TutorialStart;

    setSocial(social);

    await analytics().logEvent(EventsEnum.SelectSocial, {
      social: social.title,
    });

    replace(ScreenNamesEnum.Drawer, {
      screen,
    });
  };

  StatusBar.setBarStyle("light-content", true);
  if (Platform.OS === "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }

  if (__DEV__) {
    console.warn(`env: ${ENV_NAME}`);
  }

  return (
    <Container
      type="dark"
      backgroundVideo={require("../../assets/videos/welcomeBackground.mp4")}>
      <Icon name={IconsEnum.Logo} />
      <View style={styles.contentContainer}>
        <Text type="header">{translate("home.welcome_title")}</Text>
        <Text customStyle={styles.paragraph}>{translate("home.subtitle")}</Text>
        {SOCIALS.map(social => (
          <Button
            key={social.title}
            onPress={() => onSocialPress(social)}
            iconName={social.icon}
            label={translate("shared.connect_with", {
              socialMedia: social.title,
            })}
            style={styles.socialButton}
          />
        ))}
        <View style={styles.broughtByContainer}>
          <Icon name={IconsEnum.Eurofarma} width={123} height={21} />
        </View>
      </View>
    </Container>
  );
};

export default Home;
