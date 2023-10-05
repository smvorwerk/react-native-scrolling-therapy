import { View } from "react-native";

import { useTheme } from "@react-navigation/native";

import { Icon } from "~/assets/icons";
import { IconsEnum } from "~/enums";

import Text from "../Text/Text";

import { createStyles } from "./styles";

interface MenuIconProps {
  icon: IconsEnum;
  description: string;
  testID?: string;
}

const MenuIcon = ({
  icon,
  description,
  testID = "MenuIcon",
}: MenuIconProps) => {
  const { colors } = useTheme();
  const styles = createStyles();
  return (
    <View testID={testID} style={styles.container}>
      <Icon name={icon} fill={colors.secondary} />
      <Text type="footnote" customStyle={styles.text}>
        {description}
      </Text>
    </View>
  );
};

export default MenuIcon;
