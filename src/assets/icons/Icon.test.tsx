
import { IconsEnum } from "~/enums";
import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import Icon from "./Icon";

const sutProps = {
  component: Icon,
  props: {}
};

describe("Icon Test", () => {
  beforeEach(() => jest.resetAllMocks());

  it("should return null if Icon name does not exist", () => {
    const name = "Whatever";
    const { queryByTestId } = makeSut({ ...sutProps, props: { name } });
    expect(queryByTestId(name)).toBeFalsy();
  });

  it("should render all Icons by their name", () => {
    for (const name in IconsEnum) {
      const { getByTestId } = makeSut({ ...sutProps, props: { name } });
      expect(getByTestId(name)).toBeTruthy();
    }
  });

  it("should be able to customize the icon", () => {
    const fill = "#000";
    const stroke = "#000";
    const height = 100;
    const width = 100;
    const { getByTestId } = makeSut({
      ...sutProps, props: {
        name: IconsEnum.Logo,
        fill,
        stroke,
        height,
        width
      }
    });
    const icon = getByTestId(IconsEnum.Logo);
    expect(icon).toHaveProp("fill", fill);
    expect(icon).toHaveProp("stroke", stroke);
    expect(icon).toHaveProp("height", height);
    expect(icon).toHaveProp("width", width);

  });
});