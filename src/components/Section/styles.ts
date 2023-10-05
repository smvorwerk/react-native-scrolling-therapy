import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { StyleParams } from "./types";

export const createStyles = ({
  theme: { colors },
  withBorder,
  withContentPadding,
}: StyleParams) =>
  StyleSheet.create({
    container: {
      width: "100%",
      gap: 5,
    },
    header: {
      marginBottom: moderateScale(8),
    },
    contentContainer: {
      marginTop: moderateScale(8),
      borderRadius: moderateScale(8),
      borderColor: withBorder ? colors.onBackground : "transparent",
      borderWidth: withBorder ? StyleSheet.hairlineWidth : 0,
      overflow: withBorder ? "hidden" : "visible",
      padding: withContentPadding ? moderateScale(20) : 0,
      gap: 10,
    },
    titleBox: {
      flexDirection: "row",
      justifyContent: "space-between",

    }
  });
