import React, { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { TouchableOpacity, View } from "react-native";

import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { useNavigation, useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

import { Section, SettingsDropdown, Toggle } from "~/components";
import { ScreenNamesEnum } from "~/enums";
import { LanguageType, useLanguage } from "~/hooks";
import { SettingsScreenProps } from "~/navigation/types";
import { Storage } from "~/storage";
import { isAndroid } from "~/utils/appInfo";

import { createStyles } from "./styles";

type SETTINGS_TYPE = {
  title: string;
  isButton: boolean;
  hasToggle?: boolean;
  route?: ScreenNamesEnum
  renderOnIosOnly?: boolean
}

export const Settings: FC<SettingsScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const { t: translate, i18n } = useTranslation();
  const languages = useLanguage();

  const [toggleEnabled, setToggleEnabled] = useState(false);

  const { navigate } = useNavigation<DrawerNavigationHelpers>();

  const onToggle = () => {
    //TODO :: turn on/off camera view
    setToggleEnabled(!toggleEnabled);
  };

  const handleSettings = useMemo(() => {
    const settings: SETTINGS_TYPE[] = [
      // TODO: uncomment when implementing the toggle for showing the camera preview
      // {
      //   title: translate("settings.front_camera_view"),
      //   isButton: false,
      //   hasToggle: true,
      //   renderOnIosOnly: true
      // },
      {
        title: translate("shared.terms_and_conditions"),
        isButton: true,
        route: ScreenNamesEnum.TermsAndConditions
      },
      {
        title: translate("shared.privacy_policy"),
        isButton: true,
        route: ScreenNamesEnum.PrivacyPolicy
      },
    ];
    return settings.filter(item => (isAndroid() ? !item?.renderOnIosOnly : item));
  }, [i18n.language]);

  const handleOnSettingPress = ({ route }: { route?: ScreenNamesEnum }) => {
    if (route) {
      navigate(route);
    }
  };

  const selectedLanguage = useMemo(() => {
    return languages.find(language => language.key === i18n.language) || languages[0];
  }, [i18n.language]);

  const handleSelectLanguage = async ({ key }: LanguageType) => {
    await Promise.all([
      analytics().setUserProperty("selected_language", selectedLanguage.key),
      i18n.changeLanguage(key),
      Storage.setDataAsync("language", { language: key })
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleBox}>
          <Section title={translate("settings.title")} />
        </View>
        {handleSettings.map(item => (
          <TouchableOpacity
            key={item.title}
            style={styles.settingsBox}
            disabled={!item.isButton}
            onPress={() => handleOnSettingPress({ route: item?.route })}>
            <Section
              title={item.title}
              withBorder
              customTitleStyle={styles.customTitleStyle}
              rightChildren={
                item.hasToggle && (
                  <Toggle toggled={toggleEnabled} onToggle={onToggle} />
                )
              }
            />
          </TouchableOpacity>
        ))}
        <SettingsDropdown selected={selectedLanguage} onSelect={handleSelectLanguage} data={languages} />
      </View>
    </View>
  );
};
export default Settings;
