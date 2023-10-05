import React, { useRef } from "react";

import { StatusBar, useColorScheme } from "react-native";

import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";

import analytics from "@react-native-firebase/analytics";

import { ScreenNamesEnum } from "~/enums";
import { darkTheme, defaultTheme } from "~/theme";

import StackNavigatorScreens from "./StackNavigator";

const screensWithDarkStatusBar: Array<ScreenNamesEnum> = [
  ScreenNamesEnum.TutorialStart,
  ScreenNamesEnum.Tutorial,
];

const AppNavigator = () => {
  const scheme = useColorScheme();
  const navigationRef =
    useRef<NavigationContainerRef<Record<string, never>>>(null);
  const routeNameRef = useRef<ScreenNamesEnum>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()
          ?.name as ScreenNamesEnum;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef?.current?.getCurrentRoute()
          ?.name as ScreenNamesEnum;

        if (routeNameRef.current !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;

        StatusBar.setBarStyle(
          screensWithDarkStatusBar.includes(currentRouteName)
            ? "dark-content"
            : "light-content",
          true,
        );
      }}
      theme={scheme === "light" ? defaultTheme : darkTheme}>
      <StackNavigatorScreens />
    </NavigationContainer>
  );
};

export default AppNavigator;
