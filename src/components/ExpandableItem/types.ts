import { TextStyle, ViewProps, ViewStyle } from "react-native";

export interface ExpandableItemProps extends ViewProps {
  label: string;
  text?: string;
}

export interface ExpandableItemStyles {
  container: ViewStyle;
  button: ViewStyle;
  closeIcon: ViewStyle;
  openText: TextStyle;
  text: TextStyle;
  customContentContainer: ViewStyle;
}
