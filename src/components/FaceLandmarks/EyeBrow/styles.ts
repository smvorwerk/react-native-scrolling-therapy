import { StyleSheet } from "react-native";

import { RecordLandMark } from "~/screens/Social/types";

export const createStyles = (landmarks: RecordLandMark) =>
  StyleSheet.create({
    eyebrow: {
      position: "absolute",
      left: landmarks.topNose._x - 25,
      top: landmarks.topNose._y + 150,
    }
  });
