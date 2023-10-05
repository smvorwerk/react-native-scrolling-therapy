import React from "react";

import Corner from "./Corner";
import EyeBrowCenter from "./EyeBrowCenter";
import Mouth from "./Mouth";
import Nose from "./Nose";
import Triangle from "./Triangle";
import TriangleWithBorder from "./TriangleWithBorder";
import Box from "./Box";
import { ComponentObj, LandmarksProps } from "./types";

const componentObj: ComponentObj = {
  Corner,
  Triangle,
  TriangleWithBorder,
  EyeBrowCenter,
  Nose,
  Mouth,
  Box,
};

const Landmarks = ({ name, ...props }: LandmarksProps) => {
  if (!componentObj[name]) return null;
  return React.createElement(componentObj[name], { ...props, testID: name });
};

export default Landmarks;
