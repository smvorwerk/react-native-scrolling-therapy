import React, { FC } from "react";

import { View, Dimensions } from "react-native";

import Landmarks from "~/assets/landmarks/Landmarks";
import { LandmarksEnum } from "~/enums";

import { LandmarksProps } from "../types";

import { createStyles } from "./styles";

const Box: FC<LandmarksProps> = ({ landmarks }) => {
  const { width, height } = Dimensions.get("window");
  // this is the video width and height on the dependency project
  // we need to use this as reference to get the real top, left, width and height positions
  const video_width = height;
  // we need some adjustments cause the svg is not a perfect square, the arrows go outside the square box
  const top_margin = 10;
  const left_margin = 30;
  const width_scale = 1.5;

  const dimensions = {
    top:
      (landmarks.topLeft._y * height) / video_width +
      top_margin,
    left:
      (landmarks.topLeft._x * width) / video_width -
      left_margin,
    width:
      ((landmarks.width * width) / video_width) *
      width_scale,
  };

  const styles = createStyles(dimensions);

  return (
    <View style={styles.container}>
      <Landmarks name={LandmarksEnum.Box} width={dimensions.width} />
    </View>
  );
};

export default Box;
