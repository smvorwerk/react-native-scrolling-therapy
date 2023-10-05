import React, { FC } from "react";

import Landmarks from "~/assets/landmarks/Landmarks";
import { LandmarksEnum } from "~/enums";

import { LandmarksProps } from "../types";

import { createStyles } from "./styles";

const EyeBrow: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = createStyles(landmarks);
  return (
    <Landmarks
      style={styles.eyebrow}
      name={LandmarksEnum.EyeBrowCenter}
    />
  );
};

export default EyeBrow;
