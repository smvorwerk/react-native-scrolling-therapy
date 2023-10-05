import { Animated } from "react-native/types";

import { SOCIAL_TYPE } from "~/constants";
import { ScreenNamesEnum } from "~/enums";
import { Count } from "~/storage/type";

export type HeaderProviderProps = {
  children: React.ReactNode;
};

export interface Progress extends Animated.Value {
  _value: Animated.Value;
}
export interface ExtraTime extends Animated.Value {
  _value: Animated.Value;
}

export type HeaderContextProps = {
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: Animated.AnimatedInterpolation<string | number>;
  width: Animated.AnimatedInterpolation<string | number>;
  progress: Progress;
  loadedProgress: Progress;
  extraTime: ExtraTime;
  setViewWidth: React.Dispatch<React.SetStateAction<number>>;
  drawerScreen: ScreenNamesEnum;
  setDrawerScreen: React.Dispatch<React.SetStateAction<ScreenNamesEnum>>;
  expressionsCount: React.MutableRefObject<Count>;
  previousScreen: React.MutableRefObject<ScreenNamesEnum | undefined>;
  hasCountDownFinished: boolean;
};

export type SocialRouteProviderProps = {
  children: React.ReactNode;
};

export type SocialRouteContextProps = {
  social: SOCIAL_TYPE;
  setSocial: React.Dispatch<React.SetStateAction<SOCIAL_TYPE>>;
};

export type FirebaseUserProviderProps = {
  children: React.ReactNode;
};

export type FirebaseUserContextProps = {
  firebaseUserId: string;
};
