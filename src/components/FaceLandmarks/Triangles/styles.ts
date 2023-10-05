import { StyleSheet } from "react-native";

import { RecordLandMark } from "~/screens/Social/types";

export const createStyles = (landmarks: RecordLandMark) =>
  StyleSheet.create({
    triangle: {
      position: "absolute",
      left: landmarks.leftEye._x - 85,
      top: landmarks.leftEye._y + 230,
    },
    triangle2: {
      position: "absolute",
      left: landmarks.rightEye._x + 45,
      top: landmarks.rightEye._y + 230,
    },
    triangle3: {
      position: "absolute",
      left: landmarks.leftEyeBrow._x - 65,
      top: landmarks.leftEyeBrow._y + 210,
    },
    triangle4: {
      position: "absolute",
      left: landmarks.rightEyeBrow._x + 15,
      top: landmarks.rightEyeBrow._y + 210,
    }
  });