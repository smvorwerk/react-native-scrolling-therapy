import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { View } from "react-native";

import { useTheme } from "@react-navigation/native";

import Text from "../Text/Text";

import { createStyles } from "./styles";

const LoadingScreen: FC = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t: translate } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{translate("shared.loading")}...</Text>
    </View>
  );
};

export default LoadingScreen;
