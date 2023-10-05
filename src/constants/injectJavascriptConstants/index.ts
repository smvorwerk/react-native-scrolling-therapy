import {
  addChangeAlignment,
  addChangeExpEvent,
  addChangeLandmarksEvent,
  runOnLoad,
  runOnMount,
} from "./default";
import {
  DOM_HELPER_FB,
  LIKE_FB,
  NEXT_FB,
  PLAY_FB,
  RUN_ON_START_FB,
  SCROLL_FB,
  SCROLL_UP_FB,
  IS_USER_LOGGED_IN_FB,
} from "./facebook";
import {
  DOM_HELPER_IG,
  LIKE_IG,
  NEXT_IG,
  PLAY_IG,
  RUN_ON_START_IG,
  SCROLL_IG,
  SCROLL_UP_IG,
  IS_USER_LOGGED_IN_IG,
} from "./instagram";

export const JS = {
  runOnMount,
  runOnLoad,
  addChangeAlignment,
  addChangeExpEvent,
  addChangeLandmarksEvent,
};

export const INSTAGRAM_JS = {
  scroll: SCROLL_IG,
  scrollUp: SCROLL_UP_IG,
  like: LIKE_IG,
  next: NEXT_IG,
  play: PLAY_IG,
  domHelper: DOM_HELPER_IG,
  runOnStart: RUN_ON_START_IG,
  isUserLoggedIn: IS_USER_LOGGED_IN_IG,
};

export const FACEBOOK_JS = {
  scroll: SCROLL_FB,
  scrollUp: SCROLL_UP_FB,
  like: LIKE_FB,
  next: NEXT_FB,
  play: PLAY_FB,
  domHelper: DOM_HELPER_FB,
  runOnStart: RUN_ON_START_FB,
  isUserLoggedIn: IS_USER_LOGGED_IN_FB
};
