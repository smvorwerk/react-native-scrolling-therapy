import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ theme }: { theme: AppDefaultTheme }) =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    centerContainer: {
      marginTop: moderateScale(20),
    },
    paragraph: {
      textAlign: "center",
      lineHeight: moderateScale(30),
      fontSize: moderateScale(25),
      marginTop: moderateScale(20),
    },
    label: {
      color: theme.colors.textNegative,
    },
    disabledLabel: {
      color: theme.colors.disabledContinueButton,
    },
    buttonBox: {
      alignItems: "center",
      marginTop: moderateScale(30),
      paddingBottom: moderateScale(150),
    },
    continueButton: {
      borderColor: theme.colors.textNegative,
      width: moderateScale(30),
    },
    disabledContinue: {
      borderColor: theme.colors.disabledContinueButton,
      width: moderateScale(30),
    },
    termsAndConditionsBox: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: moderateScale(20),
    },
    termsAndConditionsTextBox: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginRight: moderateScale(30),
      marginLeft: moderateScale(10),
    },
    termsAndConditionsText: {
      color: theme.colors.termsAndConditionsBox,
      fontSize: moderateScale(13),
      fontFamily: "proximanova-bold"
    },
    text: {
      fontSize: moderateScale(13),
    }
  });
