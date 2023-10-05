import {
  DailyUsage,
  Emotions,
  ExpressionCount,
} from "~/components/Statistics/types";
import { IconsEnum } from "~/enums";
import { UserProgress } from "~/storage/type";
import i18next from "~/translation";

const translate = i18next.t;

export const getTotalAverageTime = (dailyUsage: DailyUsage[]) => {
  if (!dailyUsage?.length) return 0;
  const totalTime = dailyUsage.reduce(
    (total, { totalTime }) => total + totalTime,
    0,
  );
  return totalTime / 7;
};

export const getMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time);
  const seconds = Math.floor((time - minutes) * 60);
  return { minutes, seconds };
};

export const getBarHeight = (
  value: number,
  maxValue: number,
  maxBarHeight = 70,
) => {
  if (value === 0 || maxValue === 0) return 0;
  const percentage = (value / maxValue) * 100;
  return Math.floor(maxBarHeight * (percentage / 100));
};

export const getFilledTimeArray = (weekly: UserProgress[]) => {
  const weekArray = [];
  const time: Map<number, DailyUsage> = new Map();
  for (let i = 0; i < 7; i++) {
    weekArray.push({ weekDay: i, totalTime: 0 });
  }

  for (const { date, timing } of weekly) {
    let weekDay = new Date(date).getDay();
    if(!weekDay) weekDay = new Date(Number(date)).getDay();
    time.set(weekDay, { weekDay, totalTime: timing });
  }
  return weekArray.map(each => time.get(each.weekDay) || each);
};

export const getActions = (type: Emotions): string => {
  const expressions = {
    [IconsEnum.Happy]: translate("shared.actions_like"),
    [IconsEnum.Disgusted]: translate("shared.actions_scroll_up"),
    [IconsEnum.Surprised]: translate("shared.actions_scroll_down"),
    [IconsEnum.Sad]: translate("shared.actions_play"),
    [IconsEnum.Angry]: translate("shared.actions_swipe"),
  };
  return expressions[type] || translate("shared.actions_swipe");
};

export const getExpressionArray = (weekly: UserProgress[]): ExpressionCount[] => {
  const exp = weekly.reduce(
    (acc, { count }) => {
      acc["angry"] += count["angry"];
      acc["disgusted"] += count["disgusted"];
      acc["sad"] += count["sad"];
      acc["surprised"] += count["surprised"];
      acc["happy"] += count["happy"];
      return acc;
    },
    {
      happy: 0,
      disgusted: 0,
      surprised: 0,
      sad: 0,
      angry: 0,
    },
  );

  return Object.keys(exp).map(key => {
    switch (key) {
      case "happy":
        return {
          expression: IconsEnum.Happy,
          count: exp[key]
        };
      case "disgusted":
        return {
          expression: IconsEnum.Disgusted,
          count: exp[key],
        };
      case "surprised":
        return {
          expression: IconsEnum.Surprised,
          count: exp[key],
        };
      case "sad":
        return {
          expression: IconsEnum.Sad,
          count: exp[key],
        };
      default:
        return {
          expression: IconsEnum.Angry,
          count: exp["angry"],
        };
    }
  });
};
