import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  AnimationCallback,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { IconsEnum } from "~/enums";
import { LanguageType } from "~/hooks";

import Text from "../Text/Text";

import { createStyles } from "./styles";

export interface SettingsDropdownProps {
  initialHeight?: number;
  onSelect: (language: LanguageType) => void;
  selected: LanguageType;
  data: LanguageType[];
  customTitleWrapperStyle?: StyleProp<ViewStyle>;
  customMessageStyle?: StyleProp<TextStyle>;
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = (props) => {
  const {
    selected,
    onSelect,
    data,
    customTitleWrapperStyle,
  } = props;

  const theme = useTheme();
  const styles = createStyles({ theme });
  const animation = useSharedValue(0);
  const { t: translate } = useTranslation();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnimation = (callback?: AnimationCallback) => animation.value = withTiming(isExpanded ? 0 : 1, { duration: 800 }, callback);

  const rotateStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      animation.value,
      [0, 1],
      [0, 180],
      Extrapolate.CLAMP
    );
    return { transform: [{ rotate: `${rotation}deg` }] };
  });

  const dropdownStyle = useAnimatedStyle(() => {
    const height = interpolate(
      animation.value,
      [0, 1],
      [0, 110],
      Extrapolate.CLAMP
    );
    return { height, opacity: animation.value };
  });

  const onTogggle = () => {
    setIsExpanded(state => !state);
    toggleAnimation();
  };

  const handleSelect = (each: LanguageType) => {
    setIsExpanded(state => !state);
    toggleAnimation(() => {
      "worklet";
      runOnJS(onSelect)(each);
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.accordionPressable,
          customTitleWrapperStyle,
        ]}
        onPress={onTogggle}
        accessibilityRole="togglebutton"
        accessibilityState={{ expanded: isExpanded }}
        accessibilityLabel={selected.value}
      >
        <View style={styles.wrapper}>
          <Text>{translate("settings.language")}</Text>
          <View style={styles.row}>
            <Text customStyle={styles.selectedLanguage}>{selected.value}</Text>
            <Animated.View style={rotateStyle}>
              <Icon name={IconsEnum.ChevronDown} />
            </Animated.View>
          </View>
        </View>
      </Pressable>
      <Animated.View
        style={[dropdownStyle, styles.dropdown]}>
        {data?.filter(each => each.key !== selected.key)?.map(each => (
          <TouchableOpacity key={each.key} onPress={() => handleSelect(each)}>
            <Text color="onCardVariant" customStyle={styles.text}>{each.value}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View >
  );
};

export default SettingsDropdown;
