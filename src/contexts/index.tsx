import React, { ReactNode } from "react";

import { FirebaseUserProvider } from "./FirebaseUserContext";
import { HeaderProvider } from "./HeaderContext";
import { SocialRouteProvider } from "./SocialRouteContext";

export const Context = ({ children }: { children: ReactNode }) => (
  <SocialRouteProvider>
    <FirebaseUserProvider>
      <HeaderProvider>
        {children}
      </HeaderProvider>
    </FirebaseUserProvider>
  </SocialRouteProvider>
);