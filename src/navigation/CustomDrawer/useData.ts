import { useTranslation } from "react-i18next";

import { IconsEnum, ScreenNamesEnum } from "~/enums";

export const useData = () => {
  const { t: translate } = useTranslation();

  const menuIcons = [
    {
      id: "1",
      icon: IconsEnum.Surprised,
      description: translate("shared.actions_scroll_down"),
    },
    {
      id: "2",
      icon: IconsEnum.Disgusted,
      description: translate("shared.actions_scroll_up"),
    },
    {
      id: "3",
      icon: IconsEnum.Sad,
      description: translate("shared.actions_play")
    },
    {
      id: "4",
      icon: IconsEnum.Happy,
      description: translate("shared.actions_like")
    },
    {
      id: "5",
      icon: IconsEnum.Angry,
      description: translate("shared.actions_swipe")
    },
  ];

  const menuItems = [
    {
      id: "1",
      label: translate("menu.dashboard"),
      route: ScreenNamesEnum.Dashboard,
    },
    {
      id: "2",
      label: translate("menu.tutorial"),
      route: ScreenNamesEnum.TutorialStart,
    },
    {
      id: "3",
      label: translate("menu.statistics"),
      hasBottomBorder: true,
      route: ScreenNamesEnum.Stats,
    },
    {
      id: "4",
      label: translate("menu.settings"),
      route: ScreenNamesEnum.Settings,
    },
    {
      id: "5",
      label: translate("menu.how_it_works"),
      route: ScreenNamesEnum.Help,
    },
  ];

  return { menuIcons, menuItems };
}; 
