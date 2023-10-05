import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ theme }: { theme: AppDefaultTheme }) =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
    },
    paragraph: {
      marginTop: 5,
      marginBottom: moderateScale(10),
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: moderateScale(8),
    },
    itemText: {
      marginLeft: moderateScale(16)
    },
    buttonsContainer: {
      position: "absolute",
      flexDirection: "row",
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: "space-between"
    },
    nextButton: {
      borderColor: theme.colors.textNegative
    },
    nextButtonFullWidth: {
      borderColor: theme.colors.textNegative,
      width: "100%"
    },
    darkLabel: {
      color: theme.colors.textNegative
    },
    skipButton: {
      borderWidth: 0
    }
  });
