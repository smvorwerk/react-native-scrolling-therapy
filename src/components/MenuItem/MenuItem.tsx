import { useTranslation } from "react-i18next";

import { TouchableOpacity, View } from "react-native";

import { useTheme } from "@react-navigation/native";

import Text from "../Text/Text";

import { createStyles } from "./styles";

interface MenuItemProps {
  onPress: () => void;
  label: string;
  hasBottomBorder?: boolean;
  notifications?: string;
  testID?: string;
}

const MenuItem = ({
  onPress,
  label,
  notifications,
  hasBottomBorder = false,
  testID = "MenuItem",
}: MenuItemProps) => {
  const { colors } = useTheme();
  const styles = createStyles({ hasBottomBorder, colors });
  const { t: translate } = useTranslation();

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={styles.container}>
      <Text type="header" customStyle={styles.label}>
        {label}
      </Text>
      {label === translate("menu.statistics") && !!notifications && (
        <View testID={`${testID}_badge`} style={styles.badge}>
          <Text type="footnote">{notifications}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MenuItem;
