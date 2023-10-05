import React from "react";
import { useTranslation } from "react-i18next";

import { Linking, ScrollView, View } from "react-native";
import { Alert } from "react-native";

import { useTheme } from "@react-navigation/native";

import { Section, Text, TextWithLink } from "~/components";
import { SPONSOR_EMAIL } from "~/constants";

import { createStyles } from "./styles";

const TermsAndConditions = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { t: translate } = useTranslation();

  const handleMailTo = async (email: string) => {
    try {
      const supported = await Linking.canOpenURL(`mailto:${email}`);
      if (supported) await Linking.openURL(`mailto:${email}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        Alert.alert("Error", err?.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.titleBox}>
          <Section title={translate("terms_and_conditions.title")} />
          <Text customStyle={styles.date}>
            {translate("terms_and_conditions.date")}
          </Text>
        </View>
        <Text customStyle={styles.tacDescription}>
          {translate("terms_and_conditions.paragraph")}
        </Text>
        <Text customStyle={styles.tacTitle}>
          {translate("terms_and_conditions.bold_paragraph")}
        </Text>
        <Text customStyle={styles.tacDescription}>
          {translate("terms_and_conditions.last_paragraph")}
        </Text>
        {translate("terms_and_conditions.topics", { returnObjects: true })?.map(
          ({ title, description }, i) => (
            <View style={styles.tacBox} key={i}>
              <Text customStyle={styles.tacTitle}>{title}</Text>
              <Text customStyle={styles.tacDescription}>{description}</Text>
            </View>
          ),
        )}
        <View style={styles.links}>
          <TextWithLink
            text={translate("terms_and_conditions.brazil")}
            link={SPONSOR_EMAIL.BRAZILIAN}
            onPress={() => handleMailTo(SPONSOR_EMAIL.BRAZILIAN)}
          />
          <TextWithLink
            text={translate("terms_and_conditions.other_countries")}
            link={SPONSOR_EMAIL.GLOBAL}
            onPress={() => handleMailTo(SPONSOR_EMAIL.GLOBAL)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditions;
