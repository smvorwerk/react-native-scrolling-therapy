import { ExpressionsEnum, IconsEnum } from "~/enums";

export type TUTORIAL_MESSAGES_TYPE = {
  [key: string]: string;
};

export type TUTORIAL_STEP = {
  expression: ExpressionsEnum;
  action: "scroll down" | "scroll up" | "like" | "play" | "swipe";
  msg: string;
  title: string;
  icon: IconsEnum;
  success: string;
};

export type TUTORIAL_STEPS_TYPE = {
  expressionTimes: number;
  steps: Array<TUTORIAL_STEP>;
};
