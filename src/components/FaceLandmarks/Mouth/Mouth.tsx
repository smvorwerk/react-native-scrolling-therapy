import React, { FC } from "react";

import Landmarks from "~/assets/landmarks/Landmarks";
import { LandmarksEnum } from "~/enums";

import { LandmarksProps } from "../types";

import { createStyles } from "./styles";

const Mouth: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = createStyles(landmarks);

  return (
    <Landmarks
      style={styles.mouth}
      name={LandmarksEnum.Mouth}
    />
  );
};

export default Mouth;
