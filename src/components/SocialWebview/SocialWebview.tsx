import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { View } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

import { Actions, WebviewMessage } from "~/screens/Social/types";

import { createStyles } from "./styles";

export type SocialWebviewProps = {
  start: boolean;
  injectJS: string;
  uri: string;
  testID?: string;
  onLoading?: (loading: boolean) => void;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export interface SocialRef {
  injectJsOnSocialView: (js: string) => void;
}

const SocialWebview: React.ForwardRefRenderFunction<
  SocialRef,
  SocialWebviewProps
> = (
  {
    start,
    injectJS,
    uri,
    onLoading,
    setIsUserLoggedIn,
    testID = "SocialWebview",
  },
  ref,
) => {
  const socialViewRef = useRef<WebView>(null);

  const styles = createStyles({ start });

  useImperativeHandle(ref, () => ({
    injectJsOnSocialView: (js: string) => {
      socialViewRef?.current?.injectJavaScript(js);
    },
  }));

  const handleUserLoggedIn = (data: WebviewMessage) => {
    if (data.action !== "login") return;
    setIsUserLoggedIn &&
      setIsUserLoggedIn(data.is_user_logged_in === "true" ? true : false);
  };

  const actions: Actions = {
    login: handleUserLoggedIn,
  };

  const onMessage = (event: WebViewMessageEvent) => {
    const {
      nativeEvent: { data },
    } = event;
    let message;
    try {
      message = JSON.parse(data) as WebviewMessage;
    } catch (err) {
      console.warn(err);
    }
    message && actions[message?.action]?.(message);
  };

  return (
    <View style={styles.socialWebView} {...{ testID }}>
      <WebView
        testID={`${testID}-webview`}
        ref={socialViewRef}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        injectedJavaScript={injectJS}
        source={{ uri }}
        userAgent={
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
        }
        applicationNameForUserAgent={"ScrollingTherapy"}
        onMessage={onMessage}
        onNavigationStateChange={navState => {
          const { loading } = navState;
          onLoading?.(loading);
        }}
      />
    </View>
  );
};

export default forwardRef(SocialWebview);
