import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { View, Dimensions } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

import { useFocusEffect } from "@react-navigation/native";

import { CameraAlignmentEnum, ExpressionsEnum } from "~/enums";
import { CAMERA_WEBVIEW_URI } from "~/environment";
import { Actions, LandMarks, WebviewMessage } from "~/screens/Social/types";

import { createStyles } from "./styles";

interface CamWebviewProps {
  start: boolean;
  injectJS: string;
  onLoad: () => void;
  onStart: () => void;
  setCameraAlignment?: (alignment: CameraAlignmentEnum) => void;
  setExpression: (expression: ExpressionsEnum) => void;
  setLandmarks?: (landmarks: LandMarks) => void;
  testID?: string;
  isTutorial?: boolean;
}

export interface CamRef {
  injectJsOnCamView: (js: string) => void;
}

const CamWebview: React.ForwardRefRenderFunction<CamRef, CamWebviewProps> = (
  {
    start,
    injectJS,
    onLoad,
    onStart,
    setCameraAlignment,
    setExpression,
    setLandmarks,
    isTutorial,
    testID = "CamWebview",
  },
  ref,
) => {
  const styles = createStyles();
  const { height } = Dimensions.get("window");
  const [shouldLoadWebView, setShouldLoadWebView] = useState(false);
  const cameraViewRef = useRef<WebView>(null);

  useFocusEffect(
    useCallback(() => {
      setShouldLoadWebView(true);

      return () => {
        setShouldLoadWebView(false);
      };
    }, []),
  );

  useImperativeHandle(ref, () => ({
    injectJsOnCamView: (js: string) => {
      cameraViewRef?.current?.injectJavaScript(js);
    },
  }));

  const handleCameraAlignment = (data: WebviewMessage) => {
    if (data.action !== "cameraAlignment") return;
    setCameraAlignment && setCameraAlignment(data.cameraAlignment);
  };

  const handleExpression = (data: WebviewMessage) => {
    if (
      typeof data === "string" ||
      data.action !== "expression" ||
      !Object.values(ExpressionsEnum).includes(
        data?.expression as ExpressionsEnum,
      )
    )
      return;

    setExpression(data.expression as ExpressionsEnum);
  };

  const handleLandmarks = (data: WebviewMessage) => {
    if (data.action !== "landmarks") return;
    setLandmarks && setLandmarks(data);
  };

  const actions: Actions = {
    load: onLoad,
    start: onStart,
    cameraAlignment: handleCameraAlignment,
    expression: handleExpression,
    landmarks: handleLandmarks,
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

  const getStyle = (isTutorial: boolean | undefined) => {
    return isTutorial ? styles.cameraTutorialWebView : styles.cameraWebView;
  };

  return (
    <View
      style={start ? getStyle(isTutorial) : styles.readyMessageWebView}
      {...{ testID }}>
      {shouldLoadWebView && (
        <WebView
          testID={`${testID}-webview`}
          style={!isTutorial ? styles.cameraWebView : {}}
          ref={cameraViewRef}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          injectedJavaScript={injectJS}
          onMessage={onMessage}
          scalesPageToFit={false}
          source={{ uri: `${CAMERA_WEBVIEW_URI}?width=${height}&height=${height}` }}
        />
      )}
    </View>
  );
};

export default forwardRef(CamWebview);
