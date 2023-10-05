import { IconsEnum } from "~/enums";

import { FACEBOOK_JS, INSTAGRAM_JS } from "./injectJavascriptConstants";

type SOCIAL_MEDIA = "Instagram" | "Facebook";

export type SOCIAL_JS_TYPE = {
  scroll: string;
  scrollUp: string;
  like: string;
  next: string;
  play: string;
  domHelper: string;
  runOnStart: string;
  isUserLoggedIn: string;
};

export type SOCIAL_TYPE = {
  icon: IconsEnum;
  title: SOCIAL_MEDIA;
  url: string;
  js: SOCIAL_JS_TYPE;
};

export const SOCIALS: SOCIAL_TYPE[] = [
  {
    icon: IconsEnum.Instagram,
    title: "Instagram",
    url: "https://instagram.com/",
    js: INSTAGRAM_JS,
  },
  {
    icon: IconsEnum.Facebook,
    title: "Facebook",
    url: "https://facebook.com/",
    js: FACEBOOK_JS,
  },
];
