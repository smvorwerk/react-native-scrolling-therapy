import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ theme }: { theme: AppDefaultTheme }) =>
  StyleSheet.create({
    container: {
      overflow: "hidden",
      borderBottomColor: theme.colors.onBackground,
      borderBottomWidth: StyleSheet.hairlineWidth * 2,
    },
    accordionPressable: {
      flexDirection: "row",
      alignItems: "center",
    },
    dropdown: {
      width: "100%",
      paddingBottom: moderateScale(14),
      overflow: "hidden"
    },
    wrapper: {
      flexDirection: "row",
      flex: 1,
      height: moderateScale(44),
      alignItems: "center",
      justifyContent: "space-between",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    selectedLanguage: {
      marginRight: moderateScale(8),
      fontSize: moderateScale(13),
      lineHeight: moderateScale(28)
    },
    text: {
      alignSelf: "center",
      marginTop: moderateScale(22),
      flexGrow: 1
    }
  });
