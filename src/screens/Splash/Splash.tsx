import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react-native";

import { Platform, StatusBar, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import { useNavigation } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

import { ScreenNamesEnum } from "~/enums";
import { SplashScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";

const Splash: FC<SplashScreenProps> = () => {
  const { replace } = useNavigation<SplashScreenProps["navigation"]>();
  const { i18n } = useTranslation();

  const navigateTo = async () => {
    const selected = await Storage.getDataAsync<{ language: string }>(
      "language",
    );
    if (selected?.language) {
      await analytics().setUserProperty(
        "selected_language",
        selected?.language,
      );
      await i18n.changeLanguage(selected?.language);
      replace(ScreenNamesEnum.Home);
      return;
    }
    replace(ScreenNamesEnum.Language);
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  StatusBar.setBarStyle("light-content", true);
  if (Platform.OS === "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }

  return (
    <Lottie
      source={require("../../assets/lottie/splash-animation.json")}
      autoPlay
      loop={false}
      resizeMode="cover"
      onAnimationFinish={() => {
        void navigateTo();
      }}
    />
  );
};

export default Splash;
