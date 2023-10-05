declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CAMERA_WEBVIEW_URI: string;
      ANDROID_CODE_PUSH_TOKEN: string;
      IOS_CODE_PUSH_TOKEN: string;
      ENV_NAME: EnvNameType;
    }

    export type EnvNameType = "DEV" | "STG" | "PROD";
  }
}

export {};
