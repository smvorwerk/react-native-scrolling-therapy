import React, { useEffect } from "react";

import { Pressable } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";

export interface ToggleProps {
  toggled: boolean;
  onToggle: () => void;
  colorProps?: {
    ring: {
      on: string;
      off: string;
    };
    background: {
      on: string;
      off: string;
    };
  };
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const theme = useTheme();
  const styles = createStyles();
  const {
    toggled,
    onToggle,
    colorProps = {
      ring: {
        off: theme.colors.toggleRing,
        on: theme.colors.toggleRing
      },
      background: {
        off: theme.colors.toggleBackgroundDisabled,
        on: theme.colors.toggleBackground,
      },
    },
  } = props;

  const toggleAnimation = useSharedValue(toggled ? 1 : 0);

  useEffect(() => {
    toggleAnimation.value = withTiming(toggled ? 1 : 0, {
      duration: 200,
      easing: Easing.linear,
    });
  }, [toggled, toggleAnimation]);

  const ringAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: toggleAnimation.value * moderateScale(80 - 35 - 19) }],
      backgroundColor: interpolateColor(
        toggleAnimation.value,
        [0, 1],
        [colorProps.ring.off, colorProps.ring.on]
      ),
    };
  });

  const backgroundAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        toggleAnimation.value,
        [0, 1],
        [colorProps.background.off, colorProps.background.on]
      ),
    };
  });

  return (
    <Pressable onPress={onToggle}>
      <Animated.View
        style={[
          styles.container,
          backgroundAnimatedStyles,
        ]}
      >
        <Animated.View
          style={[
            styles.ring,
            ringAnimatedStyles,
          ]}
        >
          <Animated.View
            style={[
              styles.ringCenter,
            ]}
          />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default Toggle;