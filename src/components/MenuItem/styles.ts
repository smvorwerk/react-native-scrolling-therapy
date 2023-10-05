import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { DefaultTheme } from "~/theme";

type CreateStyles = {
  hasBottomBorder: boolean,
  colors: DefaultTheme["colors"]
}

export const createStyles = ({ hasBottomBorder, colors }: CreateStyles) =>
  StyleSheet.create({
    container: {
      paddingBottom: moderateScale(16),
      marginBottom: hasBottomBorder ? moderateScale(16) : 0,
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: hasBottomBorder ? 1 : 0,
      borderBottomColor: colors.outlinePrimary
    },
    label: {
      marginRight: moderateScale(10),
    },
    badge: {
      alignSelf: "flex-start",
      width: moderateScale(20),
      height: moderateScale(20),
      alignItems: "center",
      justifyContent: "center",
      left: -moderateScale(8),
      top: -moderateScale(2),
      borderRadius: 100,
      backgroundColor: colors.primary
    },
    text: {
      fontSize: moderateScale(10),
    }
  });