import {StyleSheet} from "react-native";

import {CreateStyleProps, TextStyles} from "./types";

export const createStyles = ({theme, type, color}: CreateStyleProps) => {
  return StyleSheet.create<TextStyles>({
    container: {
      ...(!!type && theme.typography?.[type]),
      color: color ? theme.colors[color] : theme.colors.text,
    },
  });
};
