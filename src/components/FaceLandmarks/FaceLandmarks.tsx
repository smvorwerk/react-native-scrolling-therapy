import React, { FC } from "react";

import { View } from "react-native";

import Box from "./Box/Box";
import { createStyles } from "./styles";
import { LandmarksProps } from "./types";

const FaceLandmarks: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <Box landmarks={landmarks} />
    </View>
  );
};

export default FaceLandmarks;
