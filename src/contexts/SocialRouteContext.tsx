import React, { createContext, useContext, useState } from "react";

import { configs } from "~/constants";

import { SocialRouteContextProps, SocialRouteProviderProps } from "./types";

export const SocialRouteContext = createContext({} as SocialRouteContextProps);

export const SocialRouteProvider = ({ children }: SocialRouteProviderProps) => {
  const [social, setSocial] = useState(configs.SOCIALS[1]);

  return (
    <SocialRouteContext.Provider
      value={{ social, setSocial }}>
      {children}
    </SocialRouteContext.Provider>
  );
};

export const useSocialRoute = () => useContext(SocialRouteContext);
