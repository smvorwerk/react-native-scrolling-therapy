import React, { forwardRef, ForwardRefRenderFunction } from "react";

import { View } from "react-native";
import Reanimated from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { IconsEnum } from "~/enums";

import { createStyles } from "./styles";
import { ActionIndicatorProps, ActionIndicatorRef } from "./types";
import useActionIndicatorAnimation from "./useActionIndicatorAnimation";

const ActionIndicator: ForwardRefRenderFunction<
  ActionIndicatorRef,
  ActionIndicatorProps
> = ({ icon = IconsEnum.Like }, ref) => {
  const styles = createStyles();
  const theme = useTheme();

  const {
    topIconAnimatedStyle,
    topMiddleIconAnimatedStyle,
    middleIconAnimatedStyle,
    bottomMiddleIconAnimatedStyle,
    bottomIconAnimatedStyle,
  } = useActionIndicatorAnimation({
    ref,
  });

  return (
    <View style={styles.container}>
      <Reanimated.View style={[styles.topIcon, topIconAnimatedStyle]}>
        <Icon
          name={icon}
          fill={theme.colors.secondary}
          height={moderateScale(25)}
          width={moderateScale(25)}
        />
      </Reanimated.View>
      <Reanimated.View
        style={[styles.topMiddleIcon, topMiddleIconAnimatedStyle]}>
        <Icon
          name={icon}
          fill={theme.colors.secondary}
          height={moderateScale(33)}
          width={moderateScale(33)}
        />
      </Reanimated.View>
      <Reanimated.View style={middleIconAnimatedStyle}>
        <Icon
          name={icon}
          fill={theme.colors.secondary}
          height={moderateScale(49)}
          width={moderateScale(49)}
        />
      </Reanimated.View>
      <Reanimated.View
        style={[styles.bottomMiddleIcon, bottomMiddleIconAnimatedStyle]}>
        <Icon
          name={icon}
          fill={theme.colors.secondary}
          height={moderateScale(33)}
          width={moderateScale(33)}
        />
      </Reanimated.View>
      <Reanimated.View style={[styles.bottomIcon, bottomIconAnimatedStyle]}>
        <Icon
          name={icon}
          fill={theme.colors.secondary}
          height={moderateScale(25)}
          width={moderateScale(25)}
        />
      </Reanimated.View>
    </View>
  );
};

export default forwardRef(ActionIndicator);
