import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    view: {
      flex: 1,
    },
    expression: {
      position: "absolute",
      zIndex: -1,
      backgroundColor: "#fff",
      opacity: 0,
    },
    modalContent: {
      alignItems: "center",
      paddingTop: moderateScale(24),
    },
    modalTitle: {
      paddingTop: 8,
    },
    modalDescription: {
      textAlign: "center",
      marginHorizontal: moderateScale(36),
      paddingTop: moderateScale(8),
    },
  });
