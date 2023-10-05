import React, { FC, useState } from "react";

import { Pressable, View } from "react-native";

import { Icon } from "~/assets/icons";
import { Text } from "~/components";
import { IconsEnum } from "~/enums";

import { createStyles } from "./styles";
import { ExpandableItemProps } from "./types";

const ExpandableItem: FC<ExpandableItemProps> = ({
  testID = "ExpandableItem",
  label,
  text,
  children,
}) => {
  const styles = createStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View testID={testID} style={styles.container}>
      <Pressable
        onPress={() => setIsOpen(prev => !prev)}
        testID={`${testID}_Button`}
        style={styles.button}>
        <Text customStyle={styles.openText}>{label}</Text>
        <Icon style={isOpen && styles.closeIcon} name={IconsEnum.ChevronDown} />
      </Pressable>
      {isOpen && (
        <>
          {!!text && <Text customStyle={styles.text}>{text}</Text>}
          {!!children && (
            <View style={styles.customContentContainer}>{children}</View>
          )}
        </>
      )}
    </View>
  );
};

export default ExpandableItem;
