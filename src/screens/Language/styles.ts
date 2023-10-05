import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const createStyles = () =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
    paragraph: {
      marginTop: moderateScale(8),
      marginBottom: moderateScale(16),
    },
    wrapper: {
      marginBottom: moderateScale(235)
    },
    button: {
      alignSelf: "center"
    }
  });
