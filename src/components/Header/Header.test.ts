
import { fireEvent } from "@testing-library/react-native";

import { HEADER_CONSTANTS } from "~/constants";
import { HeaderProvider } from "~/contexts/HeaderContext";
import { IconsEnum } from "~/enums";
import { makeSut } from "~/testHelpers/renderTestComponents";

import "@testing-library/jest-native/extend-expect";

import Header from "./Header";

const testID = "Header";

const sutProps = {
  component: Header,
  props: {
    iconName: IconsEnum.Menu,
    onPressIcon: jest.fn()
  },
  provider: HeaderProvider
};

describe("Header Test", () => {
  beforeEach(() => jest.resetAllMocks());

  it("should render the Header", () => {
    const { getByTestId } = makeSut(sutProps);
    expect(getByTestId(testID)).toBeTruthy();
  });

  it("should render the left icon according to the IconName", () => {
    const { getByTestId } = makeSut(sutProps);
    expect(getByTestId(sutProps.props.iconName)).toBeTruthy();
  });

  it("should render the default progress countdown", () => {
    const { getByTestId } = makeSut(sutProps);
    expect(getByTestId(`${testID}_input`)).toHaveProp("defaultValue", `${HEADER_CONSTANTS.THRESHOLD} minutes to go`);
  });

  it("should render the logo icon", () => {
    const { getByTestId } = makeSut(sutProps);
    expect(getByTestId(IconsEnum.Logo)).toBeTruthy();
  });

  it("should render the progress bar", () => {
    const { getByTestId } = makeSut(sutProps);
    const progressBar = getByTestId(`${testID}_progress_bar`);
    fireEvent(progressBar, "onLayout", {
      nativeEvent: {
        layout: {
          width: 100,
        }
      }
    });
    expect(getByTestId(`${testID}_progress`)).toHaveStyle({ transform: [{ translateX: 0 }] });
    expect(getByTestId(`${testID}_progress_circle`)).toHaveStyle({ transform: [{ translateX: 0 }] });
  });
});