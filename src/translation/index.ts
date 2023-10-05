
import { initReactI18next } from "react-i18next";

import { NativeModules, Platform } from "react-native";

import { english } from "./english";
import { portuguese } from "./portuguese";
import { spanish } from "./spanish";

import i18next from "i18next";

const locale = Platform.OS === "ios" ? NativeModules?.SettingsManager?.settings?.AppleLocale ||
  NativeModules?.SettingsManager?.settings?.AppleLanguages[0] : NativeModules.I18nManager.localeIdentifier;

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    lng: locale.split("_")?.[0] || locale,
    defaultNS: "translation",
    fallbackLng: "es",
    resources: {
      es: { translation: spanish },
      en: { translation: english },
      pt: { translation: portuguese },
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(err => console.warn("something went wrong", err));


export default i18next;