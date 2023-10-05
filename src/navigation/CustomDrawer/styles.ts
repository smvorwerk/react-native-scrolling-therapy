import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

import { DefaultTheme } from "~/theme";

export const createStyles = (colors: DefaultTheme["colors"]) => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    wrapper: {
      width: "100%",
      backgroundColor: colors.background,
      paddingHorizontal: moderateScale(36),
    },
    contentContainer: {
      paddingTop: moderateScale(20),
      paddingBottom: insets.bottom + moderateScale(20),
    },
    expressionList: {
      paddingLeft: moderateScale(36),
    },
    button: {
      marginBottom: moderateScale(40),
    },
    content: {
      paddingVertical: moderateScale(32),
    },
    title: {
      marginBottom: moderateScale(20),
    },
    subtitle: {
      paddingBottom: moderateScale(20),
    },
    row: {
      flexDirection: "row",
    },
    iconsView: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
};
