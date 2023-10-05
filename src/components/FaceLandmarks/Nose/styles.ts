import { StyleSheet } from "react-native";

import { RecordLandMark } from "~/screens/Social/types";

export const createStyles = (landmarks: RecordLandMark) =>
  StyleSheet.create({
    nose: {
      position: "absolute",
      left: landmarks.topNose._x - 50,
      top: landmarks.topNose._y + 250,
    }
  });