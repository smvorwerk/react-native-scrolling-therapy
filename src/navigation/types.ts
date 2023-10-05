import {
  DrawerNavigationEventMap,
  DrawerNavigationOptions,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import {
  DrawerNavigationState,
  NavigatorScreenParams,
  ParamListBase,
  RouteConfig,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ScreenNamesEnum } from "~/enums";

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  Language: undefined;
  TutorialStart: undefined;
  Drawer: NavigatorScreenParams<DrawerParamList>;
};

export type DrawerParamList = {
  Social: undefined;
  Dashboard: undefined;
  Help: undefined;
  TutorialCompleted: undefined,
  Stats: undefined;
  Tutorial: undefined;
  TutorialStart: undefined;
  TermsAndConditions: undefined;
  PrivacyPolicy: undefined;
  Settings: undefined;
};

export type SplashScreenProps = NativeStackScreenProps<
  StackParamList,
  ScreenNamesEnum.Splash
>;

export type LanguageScreenProps = NativeStackScreenProps<
  StackParamList,
  ScreenNamesEnum.Language
>;

export type HomeScreenProps = NativeStackScreenProps<
  StackParamList,
  ScreenNamesEnum.Home
>;

export type TutorialStartScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.TutorialStart
>;

export type TutorialCompletedScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.TutorialCompleted
>;

export type SocialScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.Social
>;

export type TutorialScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.Tutorial
>;

export type DashboardScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.Dashboard
>;

export type HelpScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.Help
>;

export type SettingsScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.Settings
>;

export type StatisticsScreenProps = DrawerScreenProps<
  DrawerParamList,
  ScreenNamesEnum.Stats
>;

export type ScreenType<T extends ParamListBase> = RouteConfig<
  T,
  keyof T,
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap
>;
