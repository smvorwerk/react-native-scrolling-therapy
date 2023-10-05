import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import MenuIcon from "./MenuIcon";

const testID = "MenuIcon";

const sutProps = {
  component: MenuIcon,
  props: {
    icon: "Happy",
    description: "Happy"
  }
};

describe("MenuIcon Test", () => {
  it("should render the MenuIcon", () => {
    const { getByTestId, getByText } = makeSut(sutProps);
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(sutProps.props.icon)).toBeTruthy();
    expect(getByText(sutProps.props.description)).toBeTruthy();
  });
});