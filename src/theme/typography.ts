import { TextStyle } from "react-native/types";
import { moderateScale } from "react-native-size-matters";

export type Typography =
  | "header"
  | "title"
  | "paragraph"
  | "buttonLabel"
  | "headline"
  | "footnote";

export const typography: Record<Typography, TextStyle> = {
  header: {
    fontSize: moderateScale(26),
    lineHeight: moderateScale(28),
    fontFamily: "proximanova-light",
  },
  title: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
    fontFamily: "proximanova-bold",
  },
  headline: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
    fontFamily: "proximanova-light",
  },
  paragraph: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
    fontFamily: "proximanova-light",
  },
  buttonLabel: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
    fontFamily: "proximanova-medium",
  },
  footnote: {
    fontSize: moderateScale(9),
    lineHeight: moderateScale(11),
    fontFamily: "proximanova-medium",
  },
};

export const footnote: TextStyle = {
  fontSize: moderateScale(10),
  lineHeight: moderateScale(11),
  fontFamily: "proximanova-medium",
};
