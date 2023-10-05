import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { DefaultStyleParams } from "~/theme";

interface StyleParams extends DefaultStyleParams {
  filledBarHeight: number;
  iconTranslateY: number;
}

export const createStyles = ({
  theme: { colors },
  filledBarHeight,
  iconTranslateY,
}: StyleParams) =>
  StyleSheet.create({
    content: {
      flex: 1,
      alignItems: "center",
    },
    container: {
      height: moderateScale(90),
      alignItems: "center",
      marginBottom: moderateScale(10),
    },
    bar: {
      width: moderateScale(5),
      height: moderateScale(90),
      backgroundColor: colors.outline,
      borderRadius: moderateScale(2.5),
      justifyContent: "flex-end",
      overflow: "hidden",
    },
    barFilled: {
      width: "100%",
      height: filledBarHeight,
      backgroundColor: colors.secondary,
    },
    expressionContainer: {
      position: "absolute",
      aspectRatio: 1,
      borderRadius: moderateScale(20),
      zIndex: 1,
      alignSelf: "center",
      bottom: 0,
      backgroundColor: colors.background,
      transform: [{ translateY: -iconTranslateY }],
    },
    footnote: {
      textAlign: "center",
    },
  });
