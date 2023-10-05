import {useEffect} from "react";

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface UseExpressionBarAnimationParams {
  count: number;
  filledBarHeight: number;
  iconTranslateY: number;
  maxCount: number;
}

const ANIMATION_DURATION = 1500;

const useExpressionBarAnimation = ({
  count,
  filledBarHeight,
  iconTranslateY,
  maxCount,
}: UseExpressionBarAnimationParams) => {
  const iconAnimatedPosition = useSharedValue(0);
  const fillBarAnimatedHeight = useSharedValue(0);

  const fillBarAnimatedStyle = useAnimatedStyle(() => ({
    height: fillBarAnimatedHeight.value,
  }));

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: iconAnimatedPosition.value}],
  }));

  useEffect(() => {
    fillBarAnimatedHeight.value = withTiming(filledBarHeight, {duration: ANIMATION_DURATION + 200});
    iconAnimatedPosition.value = withTiming(-iconTranslateY, {duration: ANIMATION_DURATION});
  }, [count, maxCount]);

  return {
    fillBarAnimatedStyle,
    iconAnimatedStyle,
  };
};

export default useExpressionBarAnimation;
