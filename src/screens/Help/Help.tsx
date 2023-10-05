import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ScrollView } from "react-native";

import { useTheme } from "@react-navigation/native";

import { ExpandableItem, Text } from "~/components";
import { HelpScreenProps } from "~/navigation/types";

import { createStyles } from "./styles";

const Help: FC<HelpScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { t: translate } = useTranslation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text customStyle={styles.header} type="header">
        {translate("help.title")}
      </Text>
      {translate("help.faq", { returnObjects: true })?.map(({ question, answer }, i) => (
        <ExpandableItem
          key={i}
          label={question}
          text={answer}
        />
      ))}
    </ScrollView>
  );
};

export default Help;
