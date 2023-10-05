import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export type LanguageType = {
  key: string;
  value: string;
}

export const useLanguage = (): LanguageType[] => {
  const { t: translate, i18n } = useTranslation();

  return useMemo(() => ([
    { key: "es", value: translate("shared.spanish") },
    { key: "pt", value: translate("shared.portuguese") },
    { key: "en", value: translate("shared.english") }
  ]), [i18n.language]);
};