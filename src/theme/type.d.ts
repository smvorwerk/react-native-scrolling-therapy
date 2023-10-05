import "@react-navigation/native";

import {AppDefaultTheme} from "./defaultTheme";

declare module "@react-navigation/native" {
  export function useTheme(): AppDefaultTheme;
}
