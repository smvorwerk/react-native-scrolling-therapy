import { english } from "~/translation/english";
import { portuguese } from "~/translation/portuguese";
import { spanish } from "~/translation/spanish";

import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      es: typeof spanish;
      en: typeof english;
      pt: typeof portuguese;
    };
  }
}