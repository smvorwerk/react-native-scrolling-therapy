import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { DefaultStyleParams } from "~/theme";

export const createStyles = ({ theme: { colors } }: DefaultStyleParams) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    contentContainer: {
      paddingHorizontal: moderateScale(30),
      paddingTop: moderateScale(20),
      paddingBottom: moderateScale(20),
    },
    titleBox: {
      marginTop: moderateScale(10),
      marginBottom: moderateScale(10),
    },
    box: {
      marginVertical: moderateScale(10),
    },
    date: {
      fontSize: moderateScale(13),
      lineHeight: moderateScale(15),
      marginBottom: moderateScale(10),
      letterSpacing: moderateScale(0.5),
      alignSelf: "flex-end",
      fontFamily: "proximanova-light",
    },
    boxRow: {
      flexDirection: "row",
    },
    title: {
      fontSize: moderateScale(13),
      lineHeight: moderateScale(15),
      marginBottom: moderateScale(10),
      letterSpacing: moderateScale(0.5),
      fontFamily: "proximanova-bold",
    },
    description: {
      fontSize: moderateScale(13),
      lineHeight: moderateScale(15),
      letterSpacing: moderateScale(0.5),
      fontFamily: "proximanova-light",
    },
  });
};
