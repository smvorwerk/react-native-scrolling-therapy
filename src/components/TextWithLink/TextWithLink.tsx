import { Pressable, View } from "react-native";

import { useTheme } from "@react-navigation/native";

import Text from "../Text/Text";

import { createStyles } from "./styles";

type TextWithLinkProps = {
  onPress: () => void;
  text: string;
  link: string;
}

const TextWithLink = ({ onPress, text, link }: TextWithLinkProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text customStyle={styles.text}>{text}:</Text>
      <Pressable onPress={onPress}>
        <Text customStyle={styles.link}>{link}</Text>
      </Pressable>
    </View>
  );
};

export default TextWithLink;