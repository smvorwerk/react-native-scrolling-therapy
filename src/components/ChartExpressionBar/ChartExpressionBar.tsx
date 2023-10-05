import React, { FC } from "react";

import { View } from "react-native";
import Animated from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { CHART_EXPRESSIONS_CONSTANTS as CONSTANTS } from "~/constants";
import { getActions, getBarHeight } from "~/utils/statistics";

import { ExpressionCount } from "../Statistics/types";
import Text from "../Text/Text";

import { createStyles } from "./styles";
import useExpressionBarAnimation from "./useExpressionBarAnimation";

interface ChartExpressionBarProps extends ExpressionCount {
  maxCount: number;
}

const ChartExpressionBar: FC<ChartExpressionBarProps> = ({
  count,
  expression,
  maxCount,
}) => {
  const filledBarHeight = getBarHeight(
    count,
    maxCount,
    CONSTANTS.MAX_BAR_HEIGHT,
  );
  const iconTranslateY = getBarHeight(
    count,
    maxCount,
    CONSTANTS.MAX_ICON_HEIGHT,
  );

  const theme = useTheme();
  const styles = createStyles({ theme, filledBarHeight, iconTranslateY });

  const { fillBarAnimatedStyle, iconAnimatedStyle } = useExpressionBarAnimation({
    count,
    filledBarHeight,
    iconTranslateY,
    maxCount,
  });

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Animated.View style={[styles.expressionContainer, iconAnimatedStyle]}>
          <Icon
            name={expression}
            fill={theme.colors.secondary}
            height={moderateScale(24)}
            width={moderateScale(24)}
          />
        </Animated.View>
        <View style={styles.bar}>
          <Animated.View style={[styles.barFilled, fillBarAnimatedStyle]} />
        </View>
      </View>
      <Text customStyle={styles.footnote} type="footnote" color="outline">{getActions(expression)}</Text>
    </View>
  );
};

export default ChartExpressionBar;
