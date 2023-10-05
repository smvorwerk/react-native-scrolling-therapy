import { StyleSheet } from "react-native";

import { AppDefaultTheme } from "~/theme";

export const createStyles = (colors: AppDefaultTheme["colors"]) =>
  StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: colors.shadow,
      position: "absolute",
      zIndex: 999,
    },
  });
