import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
    paragraph: {
      marginTop: moderateScale(8),
      marginBottom: moderateScale(16),
    },
    socialButton: {
      marginTop: moderateScale(8),
    },
    broughtByContainer: {
      marginTop: moderateScale(50),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
