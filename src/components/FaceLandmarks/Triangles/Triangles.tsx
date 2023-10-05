import React, { FC } from "react";

import Landmarks from "~/assets/landmarks/Landmarks";
import { LandmarksEnum } from "~/enums";

import { LandmarksProps } from "../types";

import { createStyles } from "./styles";

const Triangles: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = createStyles(landmarks);

  return (
    <>
      <Landmarks
        style={styles.triangle}
        name={LandmarksEnum.Triangle}
      />
      <Landmarks
        style={styles.triangle2}
        name={LandmarksEnum.Triangle}
      />
      <Landmarks
        style={styles.triangle3}
        name={LandmarksEnum.Triangle}
      />
      <Landmarks
        style={styles.triangle4}
        name={LandmarksEnum.Triangle}
      />
    </>
  );
};

export default Triangles;
