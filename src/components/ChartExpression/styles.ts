import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    chartContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: moderateScale(10),
      left: moderateScale(-10)
    },
  });
