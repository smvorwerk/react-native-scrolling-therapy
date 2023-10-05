import { StyleSheet } from "react-native";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      position: "absolute",
      zIndex: 999,
      height: "100%",
      width: "100%",
      transform: [{ scaleX: -1 }],
    },
  });
