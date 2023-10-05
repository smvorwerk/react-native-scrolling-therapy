import { StyleSheet } from "react-native";

import { RecordLandMark } from "~/screens/Social/types";

export const createStyles = (landmarks: RecordLandMark) =>
  StyleSheet.create({
    mouth: {
      position: "absolute",
      left: landmarks.bottomMouth._x - 90,
      top: landmarks.bottomMouth._y + 330,
    }
  });