import React from "react";
import { useTranslation } from "react-i18next";

import { ScrollView, View } from "react-native";

import { useTheme } from "@react-navigation/native";

import { Section, Text } from "~/components";

import { createStyles } from "./styles";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { t: translate } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleBox}>
          <Section title={translate("privacy_policy.title")} />
          <Text customStyle={styles.date}>{translate("privacy_policy.date")}</Text>
        </View>
        <Text customStyle={styles.description}>{translate("privacy_policy.intro")}</Text>
        {translate("privacy_policy.topics", { returnObjects: true })?.map(({ title, description_prefix, subtopics, description_sufix }, i) => (
          <View style={styles.box} key={i}>
            <Text customStyle={styles.title}>{title}</Text>
            <Text customStyle={styles.description}>{description_prefix}</Text>
            {subtopics ? subtopics.map(({ title, text}) => (
              <Text key={title} customStyle={styles.description}>
                <Text customStyle={styles.title}>{title}</Text>
                {text}
              </Text>
            )) : <></>}
            {description_sufix ? (
              <Text customStyle={styles.description}>{description_sufix}</Text>
            ): <></>}
          </View>
        ))}

      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
