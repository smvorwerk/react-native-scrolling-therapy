import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    chartContainer: {
      flex: 1,
      height: moderateScale(100),
      width: "100%",
      paddingTop: moderateScale(10),
    },
    barListContainer: {
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
