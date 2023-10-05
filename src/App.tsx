import React from "react";

import codePush from "react-native-code-push";

import AppNavigator from "~/navigation";

import "react-native-gesture-handler";
import "./translation";

import { Context } from "./contexts";

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

const App = () => {
  return (
    <Context>
      <AppNavigator />
    </Context>
  );
};

export default codePush(codePushOptions)(App);
