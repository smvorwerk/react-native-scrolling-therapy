import { StyleSheet } from "react-native";

export const createStyles = (dimensions: { top: number; left: number }) =>
  StyleSheet.create({
    container: {
      top: dimensions.top,
      left: dimensions.left,
      position: "relative",
    },
  });
