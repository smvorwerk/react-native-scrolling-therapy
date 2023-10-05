import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

import { HEADER_CONSTANTS } from "~/constants";
import { DefaultTheme } from "~/theme";

export const createStyles = (colors: DefaultTheme["colors"]) => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingTop: insets.top,
    },
    content: {
      flexDirection: "row",
      paddingVertical: HEADER_CONSTANTS.CIRCLE,
      paddingHorizontal: moderateScale(36),
      alignItems: "center",
      justifyContent: "space-between",
    },
    input: {
      color: colors.secondary,
      fontWeight: "bold",
      textAlign: "center",
    },
    progressBarWrapper: {
      paddingVertical:
        (HEADER_CONSTANTS.CIRCLE - HEADER_CONSTANTS.PROGRESSBAR) / 2,
    },
    progressBarFilled: {
      height: HEADER_CONSTANTS.PROGRESSBAR,
      overflow: "hidden",
      backgroundColor: colors.secondary,
    },
    progressBarEmpty: {
      position: "absolute",
      width: "100%",
      left: 0,
      height: HEADER_CONSTANTS.PROGRESSBAR,
      backgroundColor: colors.backgroundVariant,
    },
    circle: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      width: HEADER_CONSTANTS.CIRCLE,
      height: HEADER_CONSTANTS.CIRCLE,
      borderRadius: 100,
      left: 0,
      backgroundColor: colors.secondary,
    },
    innerCircle: {
      width: HEADER_CONSTANTS.PROGRESSBAR,
      height: HEADER_CONSTANTS.PROGRESSBAR,
      backgroundColor: colors.backgroundVariant,
      borderRadius: 100,
    },
  });
};
