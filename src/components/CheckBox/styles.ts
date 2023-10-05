import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ theme }: { theme: AppDefaultTheme }) =>
  StyleSheet.create({
    checkboxContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.colors.textNegative,
      borderRadius: moderateScale(8),
      width: moderateScale(30),
      height: moderateScale(30),
    },
  });