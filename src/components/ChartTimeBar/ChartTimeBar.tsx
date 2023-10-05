import React, { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { View } from "react-native";
import Reanimated from "react-native-reanimated";

import { useTheme } from "@react-navigation/native";

import { CHART_TIME_CONSTANTS as CONSTANTS } from "~/constants";
import { getBarHeight, getMinutesAndSeconds } from "~/utils/statistics";

import { DailyUsage } from "../Statistics/types";
import Text from "../Text/Text";

import { createStyles } from "./styles";
import useChartTimeBarAnimation from "./useChartTimeBarAnimation";

type Week = {
  [K in DailyUsage["weekDay"]]: string;
};

interface ChartTimeBarProps extends DailyUsage {
  index: number;
}

const ChartTimeBar: FC<ChartTimeBarProps> = ({ weekDay, totalTime, index }) => {
  const { minutes } = getMinutesAndSeconds(totalTime);

  const totalTimeHeight = useMemo(
    () => getBarHeight(minutes, 60, CONSTANTS.MAX_BAR_HEIGHT),
    [totalTime],
  );

  const theme = useTheme();
  const styles = createStyles({ theme, totalTimeHeight });
  const { t: translate, i18n } = useTranslation();

  const { totalAnimatedStyle } = useChartTimeBarAnimation({
    index,
    totalTimeHeight,
  });

  const week: Week = useMemo(() => ({
    0: translate("stats.sunday"),
    1: translate("stats.monday"),
    2: translate("stats.tuesday"),
    3: translate("stats.wednesday"),
    4: translate("stats.thursday"),
    5: translate("stats.friday"),
    6: translate("stats.saturday")
  }), [i18n.language]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.barItemContainer}>
        <Reanimated.View style={[styles.totalTimeBar, totalAnimatedStyle]} />
      </View>
      <Text type="footnote" color="outline">
        {week[weekDay]}
      </Text>
    </View>
  );
};

export default ChartTimeBar;
