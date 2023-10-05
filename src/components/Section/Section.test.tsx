import {StyleSheet, Text} from "react-native";

import {makeSut, MakeSutProps} from "~/testHelpers/renderTestComponents";
import {defaultTheme} from "~/theme";

import Section from "./Section";
import {SectionProps} from "./types";

const SectionWithChildren = (props: SectionProps) => (
  <Section {...props}>
    <Text>Ola mundo</Text>
    <Text>Hello World</Text>
  </Section>
);

const sutProps: MakeSutProps<SectionProps> = {
  component: SectionWithChildren,
  props: {
    title: "Section Title",
    subtitle: "Section Subtitle",
    customContainerStyle: {
      backgroundColor: "#000000",
    },
    customContentContainerStyle: {
      marginTop: 20,
    },
    customSubtitleStyle: {
      color: "#405040",
    },
    customTitleStyle: {
      color: "#254523",
    },
  },
};

describe("Section Test", () => {
  it("should render the Section", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section")).toBeTruthy();
  });

  it("should render title and subtitle", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section_title")).toBeTruthy();
    expect(getByTestId("Section_subtitle")).toBeTruthy();
  });

  it("should render the children", () => {
    const {getByTestId} = makeSut(sutProps);
    const content = getByTestId("Section_Content");
    expect(content.children.length).toBe(2);
  });

  it("should add a custom style to the Section container", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section")).toHaveStyle({
      backgroundColor: "#000000",
    });
  });

  it("should add a custom style to the Section title", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section_title")).toHaveStyle({
      color: "#254523",
    });
  });

  it("should add a custom style to the Section subtitle", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section_subtitle")).toHaveStyle({
      color: "#405040",
    });
  });

  it("should add a custom style to the Section content container", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section_Content")).toHaveStyle({
      marginTop: 20,
    });
  });

  it("should not have padding to content when flag 'withContentPadding' is not passed", () => {
    const {getByTestId} = makeSut(sutProps);
    expect(getByTestId("Section_Content")).toHaveStyle({
      padding: 0,
    });
  });

  it('should add padding to content when flag "withContentPadding" is passed', () => {
    const {getByTestId} = makeSut({
      ...sutProps,
      props: {...sutProps.props, withContentPadding: true},
    });
    expect(getByTestId("Section_Content")).toHaveStyle({
      padding: 20,
    });
  });

  it("should add border radius to content when flag 'withBorder' is passed", () => {
    const {getByTestId} = makeSut({
      ...sutProps,
      props: {...sutProps.props, withBorder: true},
    });
    expect(getByTestId("Section_Content")).toHaveStyle({
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: defaultTheme.colors.onBackground,
    });
  });
});
