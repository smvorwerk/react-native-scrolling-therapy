import {PropsWithChildren, ReactNode} from "react";

import {TextStyle, ViewStyle} from "react-native";

import {DefaultStyleParams} from "~/theme";

export interface SectionProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  withBorder?: boolean;
  withContentPadding?: boolean;
  customContentContainerStyle?: ViewStyle;
  customContainerStyle?: ViewStyle;
  customTitleStyle?: TextStyle;
  customSubtitleStyle?: TextStyle;
  rightChildren?: ReactNode;
  testID?: string;
}

export interface StyleParams extends DefaultStyleParams {
  withBorder?: boolean;
  withContentPadding?: boolean;
}
