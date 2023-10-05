import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { AppDefaultTheme } from "~/theme";

export const createStyles = ({ colors }: AppDefaultTheme) =>
  StyleSheet.create({
    view: {
      flex: 1,
    },
    container: {
      width: "100%",
      height: "100%",
    },
    alert: {
      position: "absolute",
      zIndex: 9,
      bottom: 0,
      width: "100%",
    },
    header: {
      position: "absolute",
      zIndex: 20000,
      width: "100%",
      top: moderateScale(45),
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: moderateScale(20),
      alignItems: "center",
    },
    alertText: {
      textAlign: "center",
      paddingLeft: moderateScale(45),
      paddingRight: moderateScale(45),
      paddingBottom: moderateScale(80),
      opacity: 0.8,
    },
    scrollableArea: {
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 999,
      width: "100%",
      height: moderateScale(250),
    },
    scrollableAreaView: {
      width: "100%",
      height: moderateScale(250),
      paddingBottom: moderateScale(15),
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    scrollableIcon: {
      opacity: 0.7,
      padding: moderateScale(25),
    },
    modal: {
      height: moderateScale(240),
      marginTop: "auto",
      backgroundColor: colors.backgroundVariant,
      borderTopLeftRadius: moderateScale(10),
      borderTopRightRadius: moderateScale(10),
      paddingBottom: moderateScale(80),
    },
    modalIcon: {
      marginTop: moderateScale(24),
      marginBottom: moderateScale(8),
      width: moderateScale(49),
      height: moderateScale(49),
      marginLeft: "auto",
      marginRight: "auto",
    },
    modalTitle: {
      textAlign: "center",
      marginBottom: moderateScale(8),
    },
    modalText: {
      textAlign: "center",
      paddingLeft: moderateScale(60),
      paddingRight: moderateScale(60),
      marginBottom: moderateScale(16),
    },
    expressionNavigation: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
    expressionNavigationIcon: {
      paddingLeft: moderateScale(8),
      paddingRight: moderateScale(8),
      paddingTop: moderateScale(5),
      paddingBottom: moderateScale(5),
    },
    feedbackAnimationContainer: {
      position: "absolute",
      right: moderateScale(36),
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9,
    },
    skipLabel: {
      opacity: 0.5,
    },
    navigation: {
      position: "absolute",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    navigationButton: {
      padding: moderateScale(40),
    },
  });
