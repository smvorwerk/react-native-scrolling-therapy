import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ theme }: { theme: AppDefaultTheme }) =>
  StyleSheet.create({
    container: {
      marginTop: moderateScale(10),
    },
    accordionPressable: {
      flexDirection: "row",
      alignItems: "center",
    },
    dropdown: {
      position: "absolute",
      width: "100%",
      paddingTop: moderateScale(44),
      paddingHorizontal: moderateScale(17),
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: theme.colors.onCard,
      overflow: "hidden"
    },
    row: {
      flexDirection: "row",
      flex: 1,
      height: moderateScale(44),
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: theme.colors.onCard,
      paddingHorizontal: moderateScale(17),
      alignItems: "center",
      justifyContent: "space-between",
    },
    text: {
      marginTop: moderateScale(22),
      flexGrow: 1
    }
  });
