import { moderateScale } from "react-native-size-matters";

export type SCROLL_INDICATOR_TYPE = {
  CONTAINER_HEIGHT: number;
  CONTAINER_BORDER_WIDTH: number;
  DOT_HEIGHT: number;
};

export const SCROLL_INDICATOR: SCROLL_INDICATOR_TYPE = {
  CONTAINER_HEIGHT: moderateScale(130),
  CONTAINER_BORDER_WIDTH: 2,
  DOT_HEIGHT: moderateScale(26),
};
