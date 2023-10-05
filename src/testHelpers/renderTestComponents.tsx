/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FC, Fragment} from "react";

import {NavigationContainer} from "@react-navigation/native";

import {render, RenderAPI} from "@testing-library/react-native";

import {defaultTheme} from "~/theme";

export type ComponentProps<T> = T extends FC<infer P> ? P : never;

export interface MakeSutProps<T> {
  component: FC<T>;
  children?: React.ReactNode;
  props: T;
  provider?: FC<any>;
  providerProps?: any;
}

export const makeSut = <T extends FC<any>>({
  component: Component,
  children,
  props,
  provider: ExtraProvider = Fragment,
  providerProps = {},
}: MakeSutProps<ComponentProps<T>>): RenderAPI => {
  return render(
    <ExtraProvider {...providerProps}>
      <NavigationContainer theme={defaultTheme}>
        <Component {...props}>{children}</Component>
      </NavigationContainer>
    </ExtraProvider>,
  );
};
