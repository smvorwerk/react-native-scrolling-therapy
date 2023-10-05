import React, { forwardRef, ForwardRefRenderFunction } from "react";

import { View } from "react-native";
import Reanimated from "react-native-reanimated";

import { createStyles } from "./styles";
import { ScrollIndicatorProps, ScrollIndicatorRef } from "./types";
import useScrollIndicatorAnimation from "./useScrollIndicatorAnimation";

const ScrollIndicator: ForwardRefRenderFunction<
  ScrollIndicatorRef,
  ScrollIndicatorProps
> = ({ scrollDirection = "down" }, ref) => {
  const styles = createStyles();

  const { dotAnimatedStyle } = useScrollIndicatorAnimation({
    scrollDirection,
    ref,
  });

  return (
    <View style={styles.container}>
      <Reanimated.View style={[styles.dot, dotAnimatedStyle]} />
    </View>
  );
};

export default forwardRef(ScrollIndicator);
