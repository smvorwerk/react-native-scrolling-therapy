import { StyleSheet } from "react-native";

import { useTheme } from "@react-navigation/native";
import { SCROLL_INDICATOR } from "~/constants";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      height: SCROLL_INDICATOR.CONTAINER_HEIGHT,
      width: moderateScale(12),
      borderRadius: 100,
      borderWidth: SCROLL_INDICATOR.CONTAINER_BORDER_WIDTH,
      borderColor: theme.colors.secondary,
    },
    dot: {
      height: SCROLL_INDICATOR.DOT_HEIGHT,
      width: "100%",
      borderRadius: 100,
      backgroundColor: theme.colors.secondary,
    },
  });
};
