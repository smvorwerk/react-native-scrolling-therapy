import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ colors }: AppDefaultTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: moderateScale(20),
    },
    text: {
      marginRight: moderateScale(8),
      fontSize: moderateScale(13),
      lineHeight: moderateScale(15),
      fontFamily: "proximanova-light",
    },
    link: {
      color: colors.termsAndConditionsBox,
      textDecorationLine: "underline",
      fontSize: moderateScale(13),
      lineHeight: moderateScale(15),
      fontFamily: "proximanova-light",
    }
  });