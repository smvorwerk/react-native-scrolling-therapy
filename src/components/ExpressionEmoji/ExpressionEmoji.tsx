import React, { useEffect } from "react";

import Reanimated, {
  Easing,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";

import { createStyles } from "./styles";
import { ExpressionEmojiProps } from "./types";
import { useSharedValue } from "react-native-reanimated";

const ExpressionEmoji: React.FC<ExpressionEmojiProps> = ({ icon }) => {
  const styles = createStyles();
  const theme = useTheme();

  const opacity = useSharedValue(0);
  const scale = useSharedValue(1.5);
  const translateY = useSharedValue(0);

  const runAnimation = () => {
    opacity.value = 0;
    scale.value = 1.5;
    translateY.value = 0;
    opacity.value = withSequence(
      withTiming(1, { duration: 250, easing: Easing.ease }),
      withTiming(1, { duration: 100, easing: Easing.ease }),
      withTiming(0, { duration: 400, easing: Easing.ease }),
    );
    scale.value = withTiming(2.7, { duration: 200, easing: Easing.ease });
    translateY.value = withTiming(15, { duration: 200, easing: Easing.ease });
  };

  const emojiAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: -translateY.value }, { scale: scale.value }],
  }));

  useEffect(() => {
    if (icon) runAnimation();
  }, [icon]);

  return (
    <Reanimated.View style={[styles.expressionEmoji, emojiAnimatedStyle]}>
      {!!icon && (
        <Icon name={icon} fill={theme.colors.secondary} style={styles.emoji} />
      )}
    </Reanimated.View>
  );
};

export default ExpressionEmoji;
