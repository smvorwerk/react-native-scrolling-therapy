import { useImperativeHandle } from "react";

import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { SCROLL_INDICATOR } from "~/constants";

import { UseScrollIndicatorAnimationParams } from "./types";

const useChartTimeBarAnimation = ({
  scrollDirection,
  ref,
}: UseScrollIndicatorAnimationParams) => {
  const dotTopDistance = useSharedValue(
    scrollDirection === "down"
      ? 0
      : SCROLL_INDICATOR.CONTAINER_HEIGHT -
      SCROLL_INDICATOR.DOT_HEIGHT -
      2 * SCROLL_INDICATOR.CONTAINER_BORDER_WIDTH,
  );

  const dotAnimatedStyle = useAnimatedStyle(() => ({
    top: dotTopDistance.value,
  }));

  const runAnimation = () => {
    dotTopDistance.value = withTiming(
      scrollDirection === "up"
        ? 0
        : SCROLL_INDICATOR.CONTAINER_HEIGHT -
        SCROLL_INDICATOR.DOT_HEIGHT -
        2 * SCROLL_INDICATOR.CONTAINER_BORDER_WIDTH,
      { duration: 300, easing: Easing.linear },
    );
  };

  const resetAnimation = () => {
    dotTopDistance.value = withSpring(
      scrollDirection === "up"
        ? SCROLL_INDICATOR.CONTAINER_HEIGHT -
        SCROLL_INDICATOR.DOT_HEIGHT -
        2 * SCROLL_INDICATOR.CONTAINER_BORDER_WIDTH
        : 0,
    );
  };

  useImperativeHandle(ref, () => ({
    runAnimation,
    resetAnimation,
  }));

  return {
    dotAnimatedStyle,
  };
};

export default useChartTimeBarAnimation;
