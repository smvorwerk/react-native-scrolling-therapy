import {makeSut} from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import Text from "./Text";

const testID = "Text";

const sutProps = {
  component: () => <Text>test</Text>,
  props: {},
};

describe("Text Test", () => {
  it("should render the Text", () => {
    const {getByTestId, getByText} = makeSut(sutProps);
    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText("test")).toBeTruthy();
  });
});
