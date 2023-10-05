import { MemoExoticComponent } from "react";

import { SvgProps } from "react-native-svg";

import { LandmarksEnum } from "~/enums";

export type ComponentObj = {
  [key in LandmarksEnum]: MemoExoticComponent<(props: SvgProps) => JSX.Element>;
};

export interface LandmarksProps extends SvgProps {
  name: keyof ComponentObj;
}
