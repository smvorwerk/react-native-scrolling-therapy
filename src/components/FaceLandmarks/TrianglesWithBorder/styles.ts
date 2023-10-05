import { StyleSheet } from "react-native";

import { RecordLandMark } from "~/screens/Social/types";

export const createStyles = (landmarks: RecordLandMark) =>
  StyleSheet.create({
    triangleWithBorder: {
      position: "absolute",
      left: landmarks.leftEye._x - 100,
      top: landmarks.leftEye._y + 300,
    },
    triangleWithBorder2: {
      position: "absolute",
      left: landmarks.rightEye._x + 40,
      top: landmarks.rightEye._y + 300,
    }
  });