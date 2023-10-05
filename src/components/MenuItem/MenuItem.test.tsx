
import { fireEvent } from "@testing-library/react-native";

import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import MenuItem from "./MenuItem";

const testID = "MenuItem";

const onPress = jest.fn();
const notifications = "99+";

const sutProps = {
  component: MenuItem,
  props: {
    onPress,
    label: "Dashboard"
  }
};

describe("MenuItem Test", () => {
  beforeEach(() => jest.resetAllMocks());

  it("should render the MenuItem", () => {
    const { getByTestId, getByText } = makeSut(sutProps);
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(sutProps.props.label)).toBeTruthy();
  });

  it("should not render a badge if the label is Statistics and it has notifications", () => {
    const { getByText, getByTestId } = makeSut({ ...sutProps, props: { ...sutProps.props, label: "Statistics", notifications } });
    expect(getByTestId(`${testID}_badge`)).toBeTruthy();
    expect(getByText(notifications)).toBeTruthy();
  });

  it("should not render a badge if the label is Statistics but has no notifications", () => {
    const { queryByTestId } = makeSut({ ...sutProps, props: { ...sutProps.props, label: "Statistics" } });
    expect(queryByTestId(`${testID}_badge`)).toBeFalsy();
  });

  it("should not render a badge if the label is not Statistics and it has notifications", () => {
    const { queryByTestId, queryByText } = makeSut({ ...sutProps, props: { ...sutProps.props, notifications } });
    expect(queryByTestId(`${testID}_badge`)).toBeFalsy();
    expect(queryByText(notifications)).toBeFalsy();
  });

  it("should be pressable", () => {
    const { getByTestId } = makeSut({ ...sutProps, props: { ...sutProps.props } });
    fireEvent.press(getByTestId(testID));
    expect(onPress).toHaveBeenCalled();
  });

  it("should render a bottomBorder if the prop hasBottomBorder is set to true", () => {
    const { getByTestId } = makeSut({ ...sutProps, props: { ...sutProps.props, hasBottomBorder: true } });
    expect(getByTestId(testID)).toHaveStyle({ borderBottomWidth: 1, borderBottomColor: "rgb(126, 87, 247)" });
  });

  it("should not render a bottomBorder if the prop hasBottomBorder is set to false", () => {
    const { getByTestId } = makeSut({ ...sutProps, props: { ...sutProps.props, hasBottomBorder: false } });
    expect(getByTestId(testID)).toHaveStyle({ borderBottomWidth: 0 });
  });
});