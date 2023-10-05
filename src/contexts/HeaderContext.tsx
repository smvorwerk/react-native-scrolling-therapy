import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Animated, AppState, Easing } from "react-native";

import { HEADER_CONSTANTS } from "~/constants";
import { ScreenNamesEnum } from "~/enums";
import { useFirestore } from "~/hooks";
import { Storage } from "~/storage";
import { Count, UserProgress } from "~/storage/type";

import { useFirebaseUser } from "./FirebaseUserContext";
import {
  ExtraTime,
  HeaderContextProps,
  HeaderProviderProps,
  Progress,
} from "./types";

import { isSameDay, isToday, startOfDay } from "date-fns";


export const HeaderContext = createContext({} as HeaderContextProps);

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [totalExtraTime, setTotalExtraTime] = useState(0);
  const [hasCountDownFinished, setHasCountDownFinished] = useState(false);

  const extraTime = useRef(new Animated.Value(0)).current as ExtraTime;
  const progress = useRef(new Animated.Value(0)).current as Progress;
  const loadedProgress = useRef(new Animated.Value(0)).current as Progress;
  const animation = useRef(
    Animated.timing(progress, {
      toValue: HEADER_CONSTANTS.THRESHOLD,
      easing: Easing.linear,
      duration: HEADER_CONSTANTS.MINUTE_AS_MS * HEADER_CONSTANTS.THRESHOLD,
      useNativeDriver: true,
    }),
  ).current;
  const extraTimeAnimation = useRef(
    Animated.timing(extraTime, {
      toValue: HEADER_CONSTANTS.THRESHOLD,
      easing: Easing.linear,
      duration: HEADER_CONSTANTS.MINUTE_AS_MS * HEADER_CONSTANTS.THRESHOLD,
      useNativeDriver: true,
    }),
  ).current;
  const appState = useRef(AppState.currentState);
  const previousScreen = useRef<ScreenNamesEnum>();
  const hasRunActiveFirst = useRef(false);
  const firstRound = useRef(true);
  const expressionsCount = useRef<Count>({
    happy: 0,
    angry: 0,
    surprised: 0,
    sad: 0,
    disgusted: 0,
  });
  const { firebaseUserId } = useFirebaseUser();
  const { setLastStoredData } = useFirestore();

  const [isEnabled, setIsEnabled] = useState(false);
  const [viewWidth, setViewWidth] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerScreen, setDrawerScreen] = useState<ScreenNamesEnum>(
    ScreenNamesEnum.Home,
  );

  useEffect(() => {
    if (!hasCountDownFinished) {
      isEnabled ? animation.start() : animation.stop();
    } else {
      isEnabled ? extraTimeAnimation.start() : extraTimeAnimation.stop();
    }
  }, [isEnabled, hasCountDownFinished]);

  useEffect(() => {
    const unsubscribeProgress = progress.addListener(count => {
      if (
        count.value + +loadedProgress._value >= HEADER_CONSTANTS.THRESHOLD &&
        firstRound.current
      ) {
        animation.stop();
        setHasCountDownFinished(true);
        firstRound.current = false;
      }
    });
    const unsubscribeExtraTime = extraTime.addListener(count => {
      if (+count.value >= HEADER_CONSTANTS.THRESHOLD) {
        setTotalExtraTime(old => old + count.value);
        extraTimeAnimation.reset();
        extraTimeAnimation.start();
      }
    });
    return () => {
      progress.removeListener(unsubscribeProgress);
      extraTime.removeListener(unsubscribeExtraTime);
    };
  }, []);

  const manageDataFirstRender = async (data: UserProgress[]) => {
    try {
      await setLastStoredData(data);
      void Storage.deleteDataAsync("progress_cache");
    } catch (err) {
      void Storage.setDataAsync("progress_cache", data);
    }
  };

  useEffect(() => {
    const listener = AppState.addEventListener("change", nextState => {
      // When the app goes background or become inactive, it should persist the progress in the storage
      if (
        appState.current === "active" &&
        nextState.match(/inactive|background/) &&
        hasRunActiveFirst.current
      ) {
        void Storage.setDataAsync("user_progress", {
          date: startOfDay(new Date()),
          timing: +loadedProgress._value + +progress._value,
          extraTime: totalExtraTime + +extraTime._value,
          count: expressionsCount.current,
        });
        hasRunActiveFirst.current = false;
      }
      // When the app goes active again, it should retrieve the progress from the storage if it's on the same day or reset it if it's a new day
      if (nextState === "active") {
        void (async () => {
          const data = await Storage.getDataAsync<UserProgress>("user_progress");
          const progressCache = await Storage.getDataAsync<UserProgress[]>("progress_cache");
          if (!data) {
            hasRunActiveFirst.current = true;
            return;
          }
          if (isToday(new Date(data.date))) {
            if (progressCache) {
              const cacheFiltered = progressCache.filter(({ date }) => !isSameDay(new Date(date), new Date(data.date)));
              await manageDataFirstRender([...cacheFiltered, data]);
            }
            loadedProgress.setValue(data.timing || 0);
            if (data.timing >= HEADER_CONSTANTS.THRESHOLD) {
              setHasCountDownFinished(true);
            }
            setTotalExtraTime(data.extraTime || 0);
            expressionsCount.current = data.count;
          } else {
            await manageDataFirstRender([data]);
            extraTime.setValue(0);
            expressionsCount.current = {
              happy: 0,
              angry: 0,
              surprised: 0,
              sad: 0,
              disgusted: 0,
            };
          }
          hasRunActiveFirst.current = true;
        })();
      }
      appState.current = nextState;
    });
    return () => {
      listener.remove();
    };
  }, [firebaseUserId]);

  const width = progress.interpolate({
    inputRange: [
      0,
      HEADER_CONSTANTS.THRESHOLD - +loadedProgress._value < 0
        ? 0
        : HEADER_CONSTANTS.THRESHOLD - +loadedProgress._value,
    ],
    outputRange: [
      (+loadedProgress._value / HEADER_CONSTANTS.THRESHOLD >=
        HEADER_CONSTANTS.THRESHOLD
        ? HEADER_CONSTANTS.THRESHOLD
        : +loadedProgress._value / HEADER_CONSTANTS.THRESHOLD) * viewWidth,
      viewWidth,
    ],
    extrapolate: "clamp",
  });

  const position = progress.interpolate({
    inputRange: [
      0,
      HEADER_CONSTANTS.THRESHOLD - +loadedProgress._value < 0
        ? 0
        : HEADER_CONSTANTS.THRESHOLD - +loadedProgress._value,
    ],
    outputRange: [
      (+loadedProgress._value / HEADER_CONSTANTS.THRESHOLD >=
        HEADER_CONSTANTS.THRESHOLD
        ? HEADER_CONSTANTS.THRESHOLD
        : +loadedProgress._value / HEADER_CONSTANTS.THRESHOLD) *
      (viewWidth - HEADER_CONSTANTS.CIRCLE),
      viewWidth - HEADER_CONSTANTS.CIRCLE,
    ],
    extrapolate: "clamp",
  });

  return (
    <HeaderContext.Provider
      value={{
        setIsEnabled,
        position,
        progress,
        loadedProgress,
        extraTime,
        width,
        setViewWidth,
        isDrawerOpen,
        setIsDrawerOpen,
        setDrawerScreen,
        drawerScreen,
        expressionsCount,
        previousScreen,
        hasCountDownFinished,
      }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
