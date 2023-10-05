import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

type CreateStyle = {
  hasIcon: boolean;
  colors: AppDefaultTheme["colors"]
};

export const createStyles = ({ hasIcon, colors }: CreateStyle) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: hasIcon ? moderateScale(45) : 0,
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.onBackground,
      borderRadius: moderateScale(8),
      paddingVertical: moderateScale(12),
      minWidth: "50%"
    },
    icon: {
      position: "absolute",
      left: 0,
    },
  });
