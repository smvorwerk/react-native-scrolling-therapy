import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const transformKey = (key: string) => {
  return `@${key.trim().toLowerCase().replace(/\s/g, "_")}`;
};

export const Storage = {
  deleteDataAsync: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(transformKey(key));
    } catch (error) {
      error instanceof Error && Alert.alert("Error", error.message);
    }
  },

  getDataAsync: async <T extends object>(key: string): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(transformKey(key));
      return !!value ? JSON.parse(value) as T : null;
    } catch (error) {
      error instanceof Error && Alert.alert("Error", error.message);
      return null;
    }
  },

  setDataAsync: async (key: string, value: object): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(transformKey(key), jsonValue);
      return;
    } catch (error) {
      error instanceof Error && Alert.alert("Error", error.message);
    }
  },

  clearAll: async (): Promise<void> => {
    await AsyncStorage.clear();
  },
};