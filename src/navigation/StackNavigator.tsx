import React from "react";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "~/components";
import { useHeader } from "~/contexts/HeaderContext";
import { ScreenNamesEnum } from "~/enums";
import { Home, Language, Splash } from "~/screens";

import DrawerNavigatorScreens from "./DrawerNavigator";
import type { StackParamList } from "./types";

const Stack = createNativeStackNavigator<StackParamList>();


const StackNavigatorScreens = () => {
  const { setDrawerScreen, drawerScreen, previousScreen } = useHeader();
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerShown:
          drawerScreen !== ScreenNamesEnum.Tutorial &&
          drawerScreen !== ScreenNamesEnum.TutorialStart &&
          drawerScreen !== ScreenNamesEnum.TutorialCompleted
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenNamesEnum.Splash}
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenNamesEnum.Language}
        component={Language}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenNamesEnum.Home}
        component={Home}
      />
      <Stack.Screen
        listeners={({ route }) => ({
          state: () => {
            const subScreen = getFocusedRouteNameFromRoute(route);
            if (subScreen) {
              setDrawerScreen(subScreen as ScreenNamesEnum);
              if (subScreen !== drawerScreen) {
                previousScreen.current = drawerScreen;
              }
            };
          },
        })}
        name={ScreenNamesEnum.Drawer}
        component={DrawerNavigatorScreens}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorScreens;
