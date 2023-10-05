import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ScrollView } from "react-native";

import { useTheme } from "@react-navigation/native";

import { Section, Statistics, Text } from "~/components";
import { StatisticsScreenProps } from "~/navigation/types";

import { createStyles } from "./styles";

const Stats: FC<StatisticsScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { t: translate } = useTranslation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Section
        title={translate("shared.statistics")}
        rightChildren={<Text>{translate("stats.weekly")}</Text>}
        withBorder
        withContentPadding
        customContainerStyle={styles.statisticsSection}>
        <Statistics />
      </Section>
    </ScrollView>
  );
};

export default Stats;
