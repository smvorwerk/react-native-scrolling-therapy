import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { CHART_TIME_CONSTANTS } from "~/constants";
import { DefaultStyleParams } from "~/theme";

interface StyleParams extends DefaultStyleParams {
  totalTimeHeight: number;
}

export const createStyles = ({
  theme: { colors },
  totalTimeHeight,
}: StyleParams) =>
  StyleSheet.create({
    wrapper: {
      alignItems: "center",
    },
    barItemContainer: {
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-end",
      width: moderateScale(10),
      borderTopLeftRadius: moderateScale(8),
      borderTopRightRadius: moderateScale(8),
      backgroundColor: colors.outline,
      overflow: "hidden",
      height: CHART_TIME_CONSTANTS.MAX_BAR_HEIGHT,
      marginBottom: moderateScale(10),
    },
    totalTimeBar: {
      backgroundColor: totalTimeHeight === 0 ? colors.outline : colors.secondary,
      height: totalTimeHeight === 0 ? moderateScale(5) : totalTimeHeight,
      width: moderateScale(10),
      borderTopLeftRadius: moderateScale(8),
      borderTopRightRadius: moderateScale(8),
    },
  });
