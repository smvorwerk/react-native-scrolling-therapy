import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    readyMessageWebView: {
      opacity: 0.7,
      backgroundColor: "transparent",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 5,
    },
    cameraWebView: {
      opacity: 0,
      backgroundColor: "transparent",
      width: moderateScale(208),
      height: moderateScale(208),
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
    },
    cameraTutorialWebView: {
      opacity: 1,
      backgroundColor: "transparent",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 5,
    },
  });
