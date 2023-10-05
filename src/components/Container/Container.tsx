import React, { FC } from "react";
import Video from "react-native-video";

import { ImageRequireSource, View, ViewProps, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";

interface ContainerProps extends ViewProps {
  testID?: string;
  type?: "dark" | "light";
  backgroundVideo?: ImageRequireSource;
  scrollable?: boolean;
}

const Container: FC<ContainerProps> = ({
  testID = "Container",
  type = "light",
  backgroundVideo,
  children,
  scrollable,
  ...props
}) => {
  const safeArea = useSafeAreaInsets();
  const theme = useTheme();

  const styles = createStyles({ type, theme, safeArea });

  const getChildrenView = (scrollable: boolean) => {
    if (scrollable) {
      return (
        <ScrollView style={styles.contentContainer}>{children}</ScrollView>
      );
    } else {
      return <View style={styles.contentContainer}>{children}</View>;
    }
  };

  return (
    <View style={styles.container} {...{ testID }} {...props}>
      {backgroundVideo ? (
        <>
          <Video
            muted
            repeat
            resizeMode="cover"
            playWhenInactive
            ignoreSilentSwitch="obey"
            source={backgroundVideo}
            style={styles.backgroundVideo}
          />
          <View style={styles.contentContainer}>{children}</View>
        </>
      ) : (
        getChildrenView(scrollable || false)
      )}
    </View>
  );
};

export default Container;
