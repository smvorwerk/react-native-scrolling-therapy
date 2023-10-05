import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
    },
    topIcon: {
      marginBottom: moderateScale(12),
      opacity: 0.3,
    },
    topMiddleIcon: {
      marginBottom: moderateScale(12),
      opacity: 0.6,
    },
    bottomMiddleIcon: {
      marginTop: moderateScale(12),
      opacity: 0.6,
    },
    bottomIcon: {
      marginTop: moderateScale(12),
      opacity: 0.3,
    },
  });
