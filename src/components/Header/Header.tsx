import { FC, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Animated, TextInput, View } from "react-native";

import { DrawerActions, useTheme } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { Icon } from "~/assets/icons";
import { HEADER_CONSTANTS } from "~/constants";
import { useHeader } from "~/contexts/HeaderContext";
import { IconsEnum, ScreenNamesEnum } from "~/enums";

import { createStyles } from "./styles";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

interface HeaderProps extends NativeStackHeaderProps {
  testID?: string;
}

const Header: FC<HeaderProps> = ({ testID = "Header", ...props }) => {
  const {
    progress,
    loadedProgress,
    setViewWidth,
    width,
    position,
    isDrawerOpen,
    drawerScreen,
    previousScreen,
  } = useHeader();
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t: translate, i18n } = useTranslation();

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const unsubscribeProgress = progress.addListener(count => {
      const timeLeft = Math.ceil(
        HEADER_CONSTANTS.THRESHOLD - count.value - +loadedProgress._value,
      );
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text:
            timeLeft <= 0
              ? translate("header.daily_goal_achieved")
              : timeLeft === 1
              ? translate("header.minute_to_go")
              : translate("header.minute_to_go_plural", { count: timeLeft }),
        });
      }
    });
    return () => {
      progress.removeListener(unsubscribeProgress);
    };
  }, []);

  const placeholder = useMemo(() => {
    const currentTime = Math.ceil(
      HEADER_CONSTANTS.THRESHOLD - +progress._value - +loadedProgress._value,
    );
    return currentTime <= 0
      ? translate("header.daily_goal_achieved")
      : currentTime === 1
      ? translate("header.minute_to_go")
      : translate("header.minute_to_go_plural", { count: currentTime });
  }, [i18n.language]);

  const onPressIcon = () => {
    if (isDrawerOpen && ScreenNamesEnum.Social) {
      props.navigation.dispatch(DrawerActions.closeDrawer());
    } else if (
      (drawerScreen === ScreenNamesEnum.TermsAndConditions ||
        drawerScreen === ScreenNamesEnum.PrivacyPolicy) &&
      previousScreen.current
    ) {
      props.navigation.navigate(previousScreen.current);
    } else if (drawerScreen === ScreenNamesEnum.Social && !isDrawerOpen) {
      props.navigation.dispatch(DrawerActions.openDrawer());
    } else {
      props.navigation.navigate(ScreenNamesEnum.Social);
    }
    previousScreen.current = drawerScreen;
  };

  const iconName = () => {
    if (isDrawerOpen) return IconsEnum.MenuClose;
    if (drawerScreen === ScreenNamesEnum.Social) return IconsEnum.Menu;
    return IconsEnum.MenuBack;
  };

  return (
    <View testID={testID} style={styles.container}>
      <View style={styles.content}>
        <Icon name={iconName()} onPress={onPressIcon} />
        <AnimatedInput
          testID={`${testID}_input`}
          style={styles.input}
          multiline
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue={placeholder}
        />
        <Icon name={IconsEnum.Logo} />
      </View>

      <View style={styles.progressBarWrapper}>
        <View
          testID={`${testID}_progress_bar`}
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            setViewWidth(width);
          }}
          style={styles.progressBarFilled}>
          <Animated.View
            testID={`${testID}_progress`}
            style={[
              styles.progressBarEmpty,
              { transform: [{ translateX: width }] },
            ]}
          />
        </View>
        <Animated.View
          testID={`${testID}_progress_circle`}
          style={[styles.circle, { transform: [{ translateX: position }] }]}>
          <View style={styles.innerCircle} />
        </Animated.View>
      </View>
    </View>
  );
};

export default Header;
