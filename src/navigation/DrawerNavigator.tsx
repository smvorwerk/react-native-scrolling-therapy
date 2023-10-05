import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ScreenNamesEnum } from "~/enums";
import {
  Dashboard,
  Help,
  PrivacyPolicy,
  Settings,
  Social,
  Stats,
  TermsAndConditions,
  Tutorial,
  TutorialCompleted,
  TutorialStart
} from "~/screens";

import { CustomDrawer } from "./CustomDrawer";
import type { DrawerParamList, ScreenType } from "./types";
const Drawer = createDrawerNavigator<DrawerParamList>();

// If the screen is from the same stack, just add an obj with name and component keys into the array below.
// It's also possible to add another key for screen options
const drawerScreens = [
  { name: ScreenNamesEnum.Social, component: Social },
  { name: ScreenNamesEnum.Dashboard, component: Dashboard },
  { name: ScreenNamesEnum.Help, component: Help },
  { name: ScreenNamesEnum.Stats, component: Stats },
  { name: ScreenNamesEnum.Settings, component: Settings },
  { name: ScreenNamesEnum.Tutorial, component: Tutorial },
  { name: ScreenNamesEnum.TutorialStart, component: TutorialStart },
  { name: ScreenNamesEnum.TutorialCompleted, component: TutorialCompleted },
  { name: ScreenNamesEnum.TermsAndConditions, component: TermsAndConditions },
  { name: ScreenNamesEnum.PrivacyPolicy, component: PrivacyPolicy },
] as ScreenType<DrawerParamList>[];

const getScreens = (props: ScreenType<DrawerParamList>) => (
  <Drawer.Screen key={props.name} {...props} />
);

const DrawerNavigatorScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        swipeEnabled: false,
        drawerStyle: { width: "100%", backgroundColor: "transparent" },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {drawerScreens.map(getScreens)}
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorScreens;
