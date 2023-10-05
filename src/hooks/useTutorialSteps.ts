import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ExpressionsEnum, IconsEnum } from "~/enums";

export const useTutorialSteps = () => {
  const { t: translate, i18n } = useTranslation();

  return useMemo(() => ({
    expressionTimes: 3,
    steps: [
      {
        expression: ExpressionsEnum.Surprised,
        msg: translate("shared.suprised_message"),
        action: "scroll down",
        title: translate("shared.actions_scroll_down"),
        icon: IconsEnum.Surprised,
        success: translate("shared.scroll_down_success"),
      },
      {
        expression: ExpressionsEnum.Disgusted,
        msg: translate("shared.disgusted_message"),
        action: "scroll up",
        title: translate("shared.actions_scroll_up"),
        icon: IconsEnum.Disgusted,
        success: translate("shared.scroll_up_success"),
      },
      {
        expression: ExpressionsEnum.Happy,
        msg: translate("shared.smile_message"),
        action: "like",
        title: translate("shared.actions_like"),
        icon: IconsEnum.Happy,
        success: translate("shared.like_success"),
      },
      {
        expression: ExpressionsEnum.Sad,
        msg: translate("shared.sad_message"),
        action: "play",
        title: translate("shared.actions_play"),
        icon: IconsEnum.Sad,
        success: translate("shared.play_success"),
      },
      {
        expression: ExpressionsEnum.Angry,
        msg: translate("shared.angry_message"),
        action: "swipe",
        title: translate("shared.actions_swipe"),
        icon: IconsEnum.Angry,
        success: translate("shared.swipe_success"),
      },
    ],
  }), [i18n.language]);
};