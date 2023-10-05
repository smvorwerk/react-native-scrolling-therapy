import { ExpressionsEnum, IconsEnum } from "~/enums";

export type EXPRESSION_EMOJIS_TYPE = { [key in ExpressionsEnum]: IconsEnum | null };

export type EXPRESSION_TYPE = {
  EMOJIS: EXPRESSION_EMOJIS_TYPE;
};

export const EXPRESSION: EXPRESSION_TYPE = {
  EMOJIS: {
    [ExpressionsEnum.Surprised]: IconsEnum.Surprised,
    [ExpressionsEnum.Disgusted]: IconsEnum.Disgusted,
    [ExpressionsEnum.Happy]: IconsEnum.Happy,
    [ExpressionsEnum.Sad]: IconsEnum.Sad,
    [ExpressionsEnum.Angry]: IconsEnum.Angry,
    [ExpressionsEnum.Neutral]: null,
  },
};
