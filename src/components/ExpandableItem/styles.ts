import { StyleSheet } from "react-native";

import { useTheme } from "@react-navigation/native";

import { ExpandableItemStyles } from "./types";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () => {
  const theme = useTheme();
  return StyleSheet.create<ExpandableItemStyles>({
    container: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
    },
    button: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: moderateScale(16),
    },
    closeIcon: {
      transform: [{ rotateZ: "180deg" }],
    },
    openText: {
      flex: 1,
      marginRight: moderateScale(8),
      fontFamily: "proximanova-bold",
    },
    text: {
      marginBottom: moderateScale(16),
    },
    customContentContainer: {
      marginBottom: moderateScale(16),
    },
  });
};
