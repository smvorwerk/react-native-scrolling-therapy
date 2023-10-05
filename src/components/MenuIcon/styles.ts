import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      width: moderateScale(50)
    },
    text: {
      marginTop: moderateScale(8),
      textAlign: "center"
    }
  });