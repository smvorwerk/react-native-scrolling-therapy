import {
  StyleProp,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native/types";

import {Color, DefaultTheme, Typography} from "~/theme";

export type TextType = "header" | "paragraph" | "buttonLabel" | "footnote";

export interface TextProps extends Omit<RNTextProps, "style"> {
  type?: Typography;
  color?: Color;
  customStyle?: StyleProp<TextStyle>;
  accessibilityAutoFocus?: boolean;
}

export type CreateStyleProps = {
  theme: DefaultTheme;
  type?: Typography;
  color?: Color;
};

export interface TextStyles {
  container: TextStyle;
}
