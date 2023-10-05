import React, { FC } from "react";

import Landmarks from "~/assets/landmarks/Landmarks";
import { LandmarksEnum } from "~/enums";

import { LandmarksProps } from "../types";

import { createStyles } from "./styles";

const Nose: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = createStyles(landmarks);
  return (
    <Landmarks
      style={styles.nose}
      name={LandmarksEnum.Nose}
    />
  );
};

export default Nose;
