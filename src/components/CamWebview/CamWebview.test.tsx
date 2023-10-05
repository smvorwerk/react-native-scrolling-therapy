/* eslint-disable @typescript-eslint/no-floating-promises */
import { RefObject, useRef } from "react";
import { ReactTestInstance } from "react-test-renderer";

import { fireEvent, renderHook } from "@testing-library/react-native";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";

import { runOnMount } from "~/constants/injectJavascriptConstants/default";
import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import CamWebview, { CamRef } from "./CamWebview";
import { createStyles } from "./styles";

type GetByTestId = (predicate: TextMatch, options?: (CommonQueryOptions & TextMatchOptions) | undefined) => ReactTestInstance

const testID = "CamWebview";
let start = false;

const onLoad = jest.fn();
const onStart = jest.fn();
const setExpression = jest.fn();

const sutProps = (ref?: RefObject<CamRef>) => ({
  component: CamWebview,
  props: {
    start,
    injectJS: runOnMount,
    onLoad,
    onStart,
    setExpression,
    uri: "https://the-scrolling-therapy.iwsbrazil.io/",
    ref,
  }
});

const styles = createStyles();

const injectJavascript = (camRef: RefObject<CamRef>, getByTestId: GetByTestId, js: string) => {
  camRef.current?.injectJsOnCamView(js);
  fireEvent(getByTestId(`${testID}-webview`), "message", {
    nativeEvent: { data: js }
  });
};

describe("CamWebview Test", () => {
  beforeEach(() => jest.resetAllMocks());

  it("should render the CamWebview", () => {
    const { getByTestId } = makeSut(sutProps());
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByTestId(`${testID}-webview`)).toBeTruthy();
  });

  it("should have readyMessageWebView styles if its not started", () => {
    const { getByTestId } = makeSut(sutProps());
    expect(getByTestId(testID)).toHaveStyle(styles.readyMessageWebView);
  });

  it("should have cameraWebView styles if its started", () => {
    start = true;
    const { getByTestId } = makeSut(sutProps());
    expect(getByTestId(testID)).toHaveStyle(styles.cameraWebView);
  });

  it("should call onLoad from the Webview", () => {
    const { result } = renderHook(() => useRef<CamRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, JSON.stringify({ action: "load", load: true }));
    expect(onLoad).toBeCalled();
  });

  it("should call start from the Webview", () => {
    const { result } = renderHook(() => useRef<CamRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, JSON.stringify({ action: "start", start: true }));
    expect(onStart).toBeCalled();
  });

  it("should call setExpression with each emotion from the Webview", () => {
    const emotions = ["neutral", "happy", "surprised", "angry"];
    const { result } = renderHook(() => useRef<CamRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    emotions.forEach(emotion => {
      const data = { action: "expression", expression: emotion };
      injectJavascript(result.current, getByTestId, JSON.stringify(data));
      expect(setExpression).toBeCalledWith(emotion);
    });
  });

  it("should not call setExpression/onLoad/onStart from the Webview if nothing is injected to js", () => {
    const { result } = renderHook(() => useRef<CamRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, "");
    expect(onStart).not.toBeCalled();
    expect(onLoad).not.toBeCalled();
    expect(setExpression).not.toBeCalled();
  });

  it("should not call setExpression/onLoad/onStart from the Webview if a random string is injected to js", () => {
    const { result } = renderHook(() => useRef<CamRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, "whatever");
    expect(onStart).not.toBeCalled();
    expect(onLoad).not.toBeCalled();
    expect(setExpression).not.toBeCalled();
  });
});