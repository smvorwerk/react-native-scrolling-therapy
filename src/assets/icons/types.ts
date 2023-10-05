import { MemoExoticComponent } from "react";

import { SvgProps } from "react-native-svg";

import { IconsEnum } from "~/enums";

export type ComponentObj = { [key in IconsEnum]: MemoExoticComponent<(props: SvgProps) => JSX.Element> }

export interface IconProps extends SvgProps {
  name: keyof ComponentObj,
}