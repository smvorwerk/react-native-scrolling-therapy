import { IconsEnum } from "~/enums";

export interface StatisticsProps {
  minutesStats: [];
  expressionsStats: [];
}

export type DailyUsage = {
  weekDay: number;
  totalTime: number;
};

export type Emotions = IconsEnum.Happy | IconsEnum.Disgusted | IconsEnum.Surprised | IconsEnum.Sad | IconsEnum.Angry;


export type ExpressionCount = {
  count: number;
  expression: Emotions;
};
