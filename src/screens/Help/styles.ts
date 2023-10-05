import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

import { DefaultStyleParams } from "~/theme";

export const createStyles = ({ theme: { colors } }: DefaultStyleParams) => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    contentContainer: {
      flexGrow: 1,
      paddingHorizontal: moderateScale(36),
      paddingTop: moderateScale(20),
      paddingBottom: insets.bottom + moderateScale(20),
    },
    header: {
      marginBottom: moderateScale(16),
    },
  });
};
