import { useImperativeHandle } from "react";

import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { UseActionIndicatorAnimationParams } from "./types";

const useChartTimeBarAnimation = ({
  ref,
}: UseActionIndicatorAnimationParams) => {
  const outsiderIconsTranslation = useSharedValue(0);
  const insiderIconsTranslation = useSharedValue(0);
  const middleIconScale = useSharedValue(1);

  const topIconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: outsiderIconsTranslation.value }],
  }));
  const topMiddleIconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: insiderIconsTranslation.value }],
  }));
  const middleIconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: middleIconScale.value }],
  }));
  const bottomMiddleIconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -insiderIconsTranslation.value }],
  }));
  const bottomIconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -outsiderIconsTranslation.value }],
  }));

  const runAnimation = () => {
    outsiderIconsTranslation.value = withTiming(6, {
      duration: 600,
      easing: Easing.linear,
    });
    setTimeout(() => {
      outsiderIconsTranslation.value = withSpring(0);
    }, 600);
    setTimeout(() => {
      insiderIconsTranslation.value = withTiming(6, {
        duration: 600,
        easing: Easing.linear,
      });
    }, 200);
    setTimeout(() => {
      insiderIconsTranslation.value = withSpring(0);
    }, 800);
    setTimeout(() => {
      middleIconScale.value = withTiming(1.2, {
        duration: 300,
        easing: Easing.bounce,
      });
    }, 800);
  };

  const resetAnimation = () => {
    middleIconScale.value = withSpring(1);
  };

  useImperativeHandle(ref, () => ({
    runAnimation,
    resetAnimation,
  }));

  return {
    topIconAnimatedStyle,
    topMiddleIconAnimatedStyle,
    middleIconAnimatedStyle,
    bottomMiddleIconAnimatedStyle,
    bottomIconAnimatedStyle,
  };
};

export default useChartTimeBarAnimation;
