import React, { FC } from "react";

import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { SvgProps } from "react-native-svg";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { IconsEnum } from "~/enums";

import Text from "../Text/Text";

import { createStyles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  iconName?: IconsEnum;
  iconProps?: SvgProps;
  customLabelStyle?: StyleProp<TextStyle>;
}

const Button: FC<ButtonProps> = ({
  iconName,
  iconProps,
  label,
  customLabelStyle,
  testID = "Button",
  ...props
}) => {
  const { colors } = useTheme();
  const styles = createStyles({ hasIcon: !!iconName, colors });

  return (
    <TouchableOpacity
      {...{ testID }}
      {...props}
      style={[styles.container, props.style]}>
      {!!iconName && (
        <View style={styles.icon}>
          <Icon name={iconName} {...iconProps} />
        </View>
      )}
      <Text
        testID={`${testID}_text`}
        type="buttonLabel"
        customStyle={customLabelStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
