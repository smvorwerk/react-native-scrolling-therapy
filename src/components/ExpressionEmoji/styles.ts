import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    expressionEmoji: {
      position: "absolute",
      zIndex: 9,
      width: "100%",
      opacity: 0,
      transform: [{ scale: 1.5 }],
      bottom: moderateScale(120),
    },
    emoji: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  });
