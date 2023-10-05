import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      width: moderateScale(62),
      height: moderateScale(35),
      borderRadius: moderateScale(25),
      alignItems: "center",
      paddingHorizontal: moderateScale(3),
      paddingVertical: moderateScale(2),
      flexDirection: "row",
    },
    ring: {
      width: moderateScale(30),
      height: moderateScale(30),
      borderRadius: moderateScale(20),
      alignItems: "center",
      justifyContent: "center",
    },
    ringCenter: {
      width: moderateScale(20),
      height: moderateScale(20),
      borderRadius: moderateScale(15),
    },
});