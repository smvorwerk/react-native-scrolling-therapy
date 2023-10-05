import React, { FC } from "react";

import { StyleSheet, View } from "react-native";

import { useTheme } from "@react-navigation/native";

import Text from "../Text/Text";

import { createStyles } from "./styles";
import { SectionProps } from "./types";

const Section: FC<SectionProps> = ({
  title,
  children,
  withBorder = false,
  withContentPadding = false,
  subtitle,
  customContainerStyle,
  customContentContainerStyle,
  customTitleStyle,
  customSubtitleStyle,
  rightChildren,
  testID = "Section",
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme, withBorder, withContentPadding });

  return (
    <View
      {...{ testID }}
      style={StyleSheet.compose(styles.container, customContainerStyle)}>
      <View style={styles.titleBox}>
        <Text
          {...{ testID: `${testID}_title` }}
          type="header"
          customStyle={StyleSheet.compose(styles.header, customTitleStyle)}>
          {title}
        </Text>
        {!!rightChildren && <>{rightChildren}</>}
      </View>
      {!!subtitle && (
        <Text
          customStyle={customSubtitleStyle}
          {...{ testID: `${testID}_subtitle` }}>
          {subtitle}
        </Text>
      )}
      <View
        style={StyleSheet.compose(
          styles.contentContainer,
          customContentContainerStyle,
        )}
        {...{ testID: `${testID}_Content` }}>
        {children}
      </View>
    </View>
  );
};

export default Section;
