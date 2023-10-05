import { Theme } from "@react-navigation/native";

import { typography } from "./typography";

const defaultTheme = {
  typography,
  dark: false,
  colors: {
    primary: "rgb(126, 87, 255)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(231, 222, 255)",
    onPrimaryContainer: "rgb(31, 0, 95)",
    secondary: "rgb(69, 236, 159)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(0, 150, 136)",
    onSecondaryContainer: "rgb(231, 255, 248)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(30, 30, 30)",
    onBackground: "rgb(255, 255, 255)",
    backgroundVariant: "rgb(242, 242, 242)",
    onBackgroundVariant: "rgb(30, 30, 30)",
    card: "rgb(43, 43, 43)",
    onCard: "rgb(255, 255, 255)",
    cardVariant: "rgb(72, 69, 78)",
    onCardVariant: "rgb(202, 196, 207)",
    outline: "rgb(121, 117, 127)",
    outlineVariant: "rgb(202, 196, 207)",
    outlinePrimary: "rgb(126, 87, 247)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(255, 255, 255)",
    inverseOnSurface: "rgb(49, 48, 51)",
    inversePrimary: "rgb(204, 189, 255)",
    divider: "rgba(255, 255, 255, 0.3)",
    elevationLevel0: "transparent",
    elevationLevel1: "rgb(247, 241, 253)",
    elevationLevel2: "rgb(243, 236, 252)",
    elevationLevel3: "rgb(238, 230, 251)",
    elevationLevel4: "rgb(237, 228, 251)",
    elevationLevel5: "rgb(234, 224, 250)",
    surfaceDisabled: "rgba(28, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 30, 0.38)",
    backdrop: "rgba(30, 30, 30, 0.5)",
    text: "rgb(255, 255, 255)",
    textNegative: "rgb(30, 30, 30)",
    toggleRing: "rgb(255, 255, 255)",
    toggleBackground: "rgb(69, 236, 159)",
    toggleBackgroundDisabled: "rgb(121, 117, 127)",
    termsAndConditionsBox: "rgb(7, 121, 234)",
    disabledContinueButton: "rgb(202, 196, 207)",
    disabledTutorialIcon: "rgb(160, 160, 160)",
  },
};

export type AppDefaultTheme = typeof defaultTheme & Theme;
export type Color = keyof typeof defaultTheme.colors;

export type DefaultTheme = typeof defaultTheme & Theme;

export default defaultTheme as AppDefaultTheme;
