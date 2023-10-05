import { useEffect } from "react";

import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

interface UseChartTimeBarAnimationParams {
  totalTimeHeight: number;
  index: number;
}

const useChartTimeBarAnimation = ({
  index,
  totalTimeHeight,
}: UseChartTimeBarAnimationParams) => {
  const activeTimeAnimatedHeight = useSharedValue(0);
  const totalTimeAnimatedHeight = useSharedValue(0);

  const activeAnimatedStyle = useAnimatedStyle(() => ({
    height: activeTimeAnimatedHeight.value,
  }));

  const totalAnimatedStyle = useAnimatedStyle(() => ({
    height: totalTimeAnimatedHeight.value,
  }));

  useEffect(() => {
    totalTimeAnimatedHeight.value = withDelay(
      moderateScale(250 * index),
      withSpring(totalTimeHeight, { damping: 10 }),
    );
  }, [totalTimeHeight]);

  return {
    activeAnimatedStyle,
    totalAnimatedStyle,
  };
};

export default useChartTimeBarAnimation;
