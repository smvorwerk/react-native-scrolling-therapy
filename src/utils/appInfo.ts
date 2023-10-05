import { Platform } from "react-native";

export const getPlatform = () => {
    try {
      const avaiablePlatforms = ["ios", "android"];
      if (!avaiablePlatforms.includes(Platform.OS)) {
        throw new Error("Unsupported platform");
      }
      return Platform.OS;
    } catch (error) {
       console.log(error);
    }
  };

  export const isIOS = () => getPlatform() === "ios";

  export const isAndroid = () => getPlatform() === "android";