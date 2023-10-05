import { fireEvent } from "@testing-library/react-native";

import { IconsEnum } from "~/enums";
import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import Button from "./Button";

const testID = "Button";

const onPress = jest.fn();
const label = "Connect with Facebook";

const sutProps = {
  component: Button,
  props: {
    label,
    onPress
  }
};

describe("SocialWebview Test", () => {
  beforeEach(() => jest.resetAllMocks());

  it("should render the Button", () => {
    const { getByTestId, getByText } = makeSut(sutProps);
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(label)).toBeTruthy();
  });

  it("should be able to custom style the Button container", () => {
    const { getByTestId } = makeSut({
      ...sutProps, props: {
        ...sutProps.props,
        style: {
          borderRadius: 80
        }
      }
    });
    expect(getByTestId(testID)).toHaveStyle({ borderRadius: 80 });
  });

  it("should be able to custom style the Button label", () => {
    const color = "#000000";
    const { getByTestId } = makeSut({
      ...sutProps, props: {
        ...sutProps.props,
        customLabelStyle: {
          color,
        }
      }
    });
    expect(getByTestId(`${testID}_text`)).toHaveStyle({ color });
  });

  it("should render the Button with an icon", () => {
    const iconName = IconsEnum.Facebook;
    const { getByTestId } = makeSut({ ...sutProps, props: { ...sutProps.props, iconName } });
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByTestId(iconName)).toBeTruthy();
  });

  it("should be able to custom style the icon", () => {
    const iconName = IconsEnum.Facebook;
    const width = 200;
    const height = 200;
    const { getByTestId } = makeSut({
      ...sutProps,
      props: {
        ...sutProps.props,
        iconName,
        iconProps: {
          width,
          height
        }
      }
    });
    const icon = getByTestId(iconName);
    expect(icon).toHaveProp("width", width);
    expect(icon).toHaveProp("height", height);
  });

  it("should be able to click the button", () => {
    const { getByTestId } = makeSut(sutProps);
    fireEvent.press(getByTestId(testID));
    expect(onPress).toHaveBeenCalled();
  });
});