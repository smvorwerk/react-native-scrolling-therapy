import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ colors }: AppDefaultTheme) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: colors.backdrop
    },
    modal: {
      height: "auto",
      marginTop: "auto",
      backgroundColor: colors.backgroundVariant,
      borderTopLeftRadius: moderateScale(10),
      borderTopRightRadius: moderateScale(10),
      paddingBottom: moderateScale(80),
    },
    buttonBox: {
      alignItems: "center",
      marginTop: moderateScale(20),
    },
    continueButton: {
      borderColor: colors.textNegative,
      width: moderateScale(30),
    },
    label: {
      color: colors.textNegative
    },
  });
