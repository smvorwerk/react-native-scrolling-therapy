import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ScrollView } from "react-native";
import analytics from "@react-native-firebase/analytics";

import { useTheme } from "@react-navigation/native";

import { Button, Statistics, Text } from "~/components";
import Section from "~/components/Section/Section";
import { configs, SOCIAL_TYPE } from "~/constants";
import { useSocialRoute } from "~/contexts/SocialRouteContext";
import { EventsEnum, ScreenNamesEnum } from "~/enums";
import { DashboardScreenProps } from "~/navigation/types";

import { createStyles } from "./styles";

const Dashboard: FC<DashboardScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { setSocial } = useSocialRoute();
  const { t: translate } = useTranslation();

  const onSocialPress = async (social: SOCIAL_TYPE) => {
    setSocial(social);
    await analytics().logEvent(EventsEnum.SelectSocial, {
      social: social.title,
    });
    navigation.navigate(ScreenNamesEnum.Social);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Section
        title={translate("dashboard.section_welcome")}
        subtitle={translate("dashboard.explore")}
        customContentContainerStyle={styles.buttonSection}>
        {configs.SOCIALS.map(social => (
          <Button
            key={social.title}
            label={translate("shared.connect_with", {
              socialMedia: social.title,
            })}
            onPress={() => onSocialPress(social)}
            iconName={social.icon}
          />
        ))}
      </Section>

      <Section
        title={translate("shared.statistics")}
        withBorder
        withContentPadding
        customContainerStyle={styles.statisticsSection}>
        <Statistics />
      </Section>

      <Section
        title={translate("dashboard.about_title")}
        withBorder
        withContentPadding>
        <Text type="headline">{translate("dashboard.about_description")}</Text>
      </Section>
    </ScrollView>
  );
};

export default Dashboard;
