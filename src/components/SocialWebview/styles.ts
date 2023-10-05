import { StyleSheet } from "react-native";

export const createStyles = ({ start }: { start: boolean }) =>
  StyleSheet.create({
    socialWebView: {
      opacity: start ? 1 : 0.5,
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 5,
    },
  });
