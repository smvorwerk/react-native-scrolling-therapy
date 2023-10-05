import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    outerNote: {
      fontSize: moderateScale(11),
      lineHeight: moderateScale(12),
    },
    middleNote: {
      fontSize: moderateScale(8),
      lineHeight: moderateScale(10),
    },
  });
