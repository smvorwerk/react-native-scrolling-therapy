/* eslint-disable @typescript-eslint/no-floating-promises */
import { RefObject, useRef } from "react";
import { ReactTestInstance } from "react-test-renderer";

import { fireEvent, renderHook } from "@testing-library/react-native";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";

import { configs } from "~/constants";
import { DOM_HELPER_IG, LIKE_IG, NEXT_IG, SCROLL_IG } from "~/constants/injectJavascriptConstants/instagram";
import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import SocialWebview, { SocialRef } from "./SocialWebview";

type GetByTestId = (predicate: TextMatch, options?: (CommonQueryOptions & TextMatchOptions) | undefined) => ReactTestInstance

const testID = "SocialWebview";
const callback = jest.fn();
let start = false;

const sutProps = (ref?: RefObject<SocialRef>) => ({
  component: SocialWebview,
  props: {
    start,
    injectJS: DOM_HELPER_IG,
    uri: configs.SOCIALS[0].url,
    callback,
    ref,
  }
});

const injectJavascript = (socialRef: RefObject<SocialRef>, getByTestId: GetByTestId, js: string) => {
  socialRef.current?.injectJsOnSocialView(js);
  fireEvent(getByTestId(`${testID}-webview`), "message", {
    nativeEvent: { data: js }
  });
};

describe("SocialWebview Test", () => {
  it("should render the SocialWebview", () => {
    const { getByTestId } = makeSut(sutProps());
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByTestId(`${testID}-webview`)).toBeTruthy();
  });

  it("should have lower opacity if its not started", () => {
    const { getByTestId } = makeSut(sutProps());
    expect(getByTestId(testID)).toHaveStyle({ opacity: 0.5 });
  });

  it("should have full opacity if its started", () => {
    start = true;
    const { getByTestId } = makeSut(sutProps());
    expect(getByTestId(testID)).toHaveStyle({ opacity: 1 });
  });

  it("should inject and get message of scroll from the Webview", () => {
    const { result } = renderHook(() => useRef<SocialRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, SCROLL_IG);
    expect(callback).toBeCalledWith(SCROLL_IG);
  });

  it("should inject and get message of like from the Webview", () => {
    const { result } = renderHook(() => useRef<SocialRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, LIKE_IG);
    expect(callback).toBeCalledWith(LIKE_IG);
  });

  it("should inject and get message of scroll from the Webview", () => {
    const { result } = renderHook(() => useRef<SocialRef>(null));
    const { getByTestId } = makeSut(sutProps(result.current));
    injectJavascript(result.current, getByTestId, NEXT_IG);
    expect(callback).toBeCalledWith(NEXT_IG);
  });
});