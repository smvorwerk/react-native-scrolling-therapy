import React, {
  MutableRefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { View } from "react-native";

import { useFocusEffect, useTheme } from "@react-navigation/native";

import {
  CHART_EXPRESSIONS_CONSTANTS,
  CHART_TIME_CONSTANTS,
  MONTHS,
} from "~/constants";
import { useFirebaseUser } from "~/contexts/FirebaseUserContext";
import { useHeader } from "~/contexts/HeaderContext";
import { useFirestore } from "~/hooks";
import { Storage } from "~/storage";
import { UserProgress } from "~/storage/type";
import {
  getActions,
  getExpressionArray,
  getFilledTimeArray,
  getMinutesAndSeconds,
  getTotalAverageTime,
} from "~/utils/statistics";

import ChartExpression from "../ChartExpression/ChartExpression";
import ChartMetrics from "../ChartMetrics/ChartMetrics";
import ChartTime from "../ChartTime/ChartTime";
import Text from "../Text/Text";

import { createStyles } from "./styles";
import { DailyUsage, ExpressionCount } from "./types";

import { isSameDay, startOfDay } from "date-fns";

const Statistics = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { firebaseUserId } = useFirebaseUser();
  const [history, setHistory] = useState<DailyUsage[]>([]);
  const [expressions, setExpressions] = useState<ExpressionCount[]>([]);
  const { getWeeklyData } = useFirestore();
  const { t: translate, i18n } = useTranslation();
  const { progress, loadedProgress, expressionsCount } = useHeader();
  const firebaseWeekly: MutableRefObject<UserProgress[]> = useRef([]);

  const getHistory = async () => {
    try {
      const weekly = await getData();
      setExpressions(getExpressionArray(weekly));
      setHistory(getFilledTimeArray(weekly));
    } catch (err) {
      console.warn(err);
    }
  };

  const getData = async () => {
    const currentDate = new Date();
    const today = currentDate.getDay();
    const thisMonth = currentDate.getMonth();
    const thisYear = currentDate.getFullYear().toString();
    let weekly: UserProgress[] = [];
    const hasChangedTheDay =
      firebaseWeekly.current.every(({ date }) => new Date(date).getDay() !== today) ?? true;
    if (hasChangedTheDay) {
      firebaseWeekly.current = await getWeeklyData({
        doc: firebaseUserId,
        subCollection: thisYear,
        subDoc: thisYear,
        month: MONTHS[thisMonth],
        currentDate,
        today,
      });
      weekly = [...firebaseWeekly.current];
    }
    const memoryData = getMemoryData();
    weekly = weekly.filter(({date}) => !isSameDay(currentDate, new Date(date)));
    weekly.push(memoryData);
    const data = await Storage.getDataAsync<UserProgress>("user_progress");
    if (data && !isSameDay(new Date(Number(memoryData.date)), new Date(data.date))) {
      weekly.push(data);
    }
    return weekly;
  };

  const getMemoryData = (): UserProgress => {
    return {
        date: String(Date.parse(startOfDay(new Date()).toString())),
        timing: +loadedProgress._value + +progress._value,
        count: expressionsCount.current,
      };
  };

  useFocusEffect(
    useCallback(() => {
      void getHistory();
    }, []),
  );

  const averageMinutes = useMemo(() => {
    const currentDay = new Date().getDay();
    const fromToday = history.filter(({ weekDay }) => weekDay <= currentDay);
    return getTotalAverageTime(fromToday);
  }, [history]);

  const timing = useMemo(() => {
    const { minutes, seconds } = getMinutesAndSeconds(averageMinutes);
    if (!minutes && !seconds) return translate("stats.no_data");
    return `${translate("stats.minute", { count: minutes })} ${translate(
      "stats.second",
      { count: seconds },
    )}`;
  }, [history, i18n.language]);

  const sortExpressions = useCallback(
    (expressions: ExpressionCount[]) => {
      if (expressions.every(({ count }) => !count))
        return translate("stats.no_data");
      const sorted = [...expressions].sort((a, b) => b.count - a.count);
      return `${getActions(sorted[0].expression)}, ${getActions(
        sorted[1].expression,
      )} & ${getActions(sorted[2].expression)}`;
    },
    [i18n.language],
  );

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text adjustsFontSizeToFit>{translate("stats.average_time")}</Text>
        <Text
          customStyle={styles.title}
          type="header"
          adjustsFontSizeToFit
          numberOfLines={2}>
          {timing}
        </Text>

        <View style={styles.chartWrapper}>
          <View style={styles.chartTime}>
            <ChartMetrics
              topLabel={`${CHART_TIME_CONSTANTS.MAX_BAR_HEIGHT - 10}`}
              middleLabel={translate("stats.chart_time_middle_label")}
              bottomLabel="0"
            />
          </View>
          <ChartTime {...{ history }} />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.sectionContainer}>
        <Text adjustsFontSizeToFit>{translate("stats.most_used_actions")}</Text>
        <Text
          customStyle={styles.title}
          type="header"
          adjustsFontSizeToFit
          numberOfLines={2}>
          {sortExpressions(expressions)}
        </Text>
        <View style={styles.chartExpressionWrapper}>
          <View style={styles.chartExpressions}>
            <ChartMetrics
              topLabel={`${CHART_EXPRESSIONS_CONSTANTS.MAX_BAR_HEIGHT}`}
              bottomLabel="0"
            />
          </View>
          <ChartExpression {...{ expressions }} />
        </View>
      </View>
    </View>
  );
};

export default Statistics;
