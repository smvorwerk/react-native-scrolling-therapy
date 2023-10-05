import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { CHART_EXPRESSIONS_CONSTANTS, CHART_TIME_CONSTANTS } from "~/constants";
import { DefaultStyleParams } from "~/theme";

export const createStyles = ({ theme: { colors } }: DefaultStyleParams) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
    },
    sectionContainer: {
      width: "100%",
    },
    title: {
      fontWeight: "bold",
    },
    chartWrapper: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    chartExpressionWrapper: {
      flexDirection: "row",
      alignItems: "flex-start",
      width: moderateScale(284),
    },
    chartTime: {
      justifyContent: "space-between",
      height: CHART_TIME_CONSTANTS.MAX_BAR_HEIGHT,
      marginRight: moderateScale(10),
      marginTop: moderateScale(10),
    },
    chartExpressions: {
      justifyContent: "space-between",
      height: CHART_EXPRESSIONS_CONSTANTS.MAX_BAR_HEIGHT - moderateScale(10),
      marginTop: moderateScale(10),
    },
    divider: {
      height: 1,
      backgroundColor: colors.outline,
      width: "100%",
      marginVertical: moderateScale(20),
    },
  });
