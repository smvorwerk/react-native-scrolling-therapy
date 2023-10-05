import { StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import { AppDefaultTheme } from "~/theme";

export const createStyles = ({
  type,
  theme,
  safeArea,
}: {
  type: "dark" | "light";
  theme: AppDefaultTheme;
  safeArea: EdgeInsets;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        type === "dark"
          ? theme.colors.background
          : theme.colors.backgroundVariant,
    },
    backgroundVideo: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
    },
    contentContainer: {
      flex: 1,
      paddingTop: safeArea.top + moderateScale(40),
      paddingBottom: safeArea.bottom + moderateScale(40),
      paddingRight: safeArea.right + moderateScale(36),
      paddingLeft: safeArea.left + moderateScale(36),
    },
    image: { flex: 1 },
  });
