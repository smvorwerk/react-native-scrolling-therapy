import React, { FC } from "react";

import Landmarks from "~/assets/landmarks/Landmarks";
import { LandmarksEnum } from "~/enums";

import { LandmarksProps } from "../types";

import { createStyles } from "./styles";

const TrianglesWithBorder: FC<LandmarksProps> = ({ landmarks }) => {
  const styles = createStyles(landmarks);
  return (
    <>
      <Landmarks
        style={styles.triangleWithBorder}
        name={LandmarksEnum.TriangleWithBorder}
      />
      <Landmarks
        style={styles.triangleWithBorder2}
        name={LandmarksEnum.TriangleWithBorder}
      />
    </>
  );
};

export default TrianglesWithBorder;
