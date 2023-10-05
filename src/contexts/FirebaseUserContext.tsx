import React, { createContext, useContext, useEffect, useState } from "react";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import analytics from "@react-native-firebase/analytics";
import crashlytics from "@react-native-firebase/crashlytics";

import { FirebaseUserContextProps, FirebaseUserProviderProps } from "./types";

export const FirebaseUserContext = createContext(
  {} as FirebaseUserContextProps,
);

export const FirebaseUserProvider = ({
  children,
}: FirebaseUserProviderProps) => {
  const [firebaseUserId, setFirebaseUserId] = useState("");

  async function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (!user) return;
    setFirebaseUserId(user.uid);
    await analytics().setUserId(user.uid);
    await crashlytics().setUserId(user.uid);
  }

  function firebaseAuth() {
    auth()
      .signInAnonymously()
      .catch((error: Error) => {
        crashlytics().recordError(error);
        const errorString = error?.message ?? error.toString();
        console.warn(errorString);
      });
  }

  useEffect(() => {
    firebaseAuth();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <FirebaseUserContext.Provider value={{ firebaseUserId }}>
      {children}
    </FirebaseUserContext.Provider>
  );
};

export const useFirebaseUser = () => useContext(FirebaseUserContext);
