import React, { FC } from "react";

import { Text as RNText } from "react-native";

import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";
import { TextProps } from "./types";

const Text: FC<TextProps> = ({
  testID = "Text",
  children,
  type = "paragraph",
  color,
  customStyle,
  ...props
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme, type, color });

  return (
    <RNText
      testID={testID}
      style={[styles.container, customStyle]}
      accessibilityRole="text"
      accessible
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
