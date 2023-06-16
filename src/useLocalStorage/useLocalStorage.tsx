import { useState, useEffect } from "react";
import { DataApi } from "../Catalog/Catalog";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];
type ReturnTovar<V> = [
  V | undefined,
  React.Dispatch<React.SetStateAction<V | undefined>>
];
export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [state, SetState] = useState(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);
  return [state, SetState];
};
export const useStoredData = <V,>(
  code: string,
  tovarName: string,
): ReturnTovar<V> => {
  const [storedTovar, setStoredTovar] = useState(() => {
    if (!tovarName) return;
    try {
      const value = localStorage.getItem(code);
      return value ? JSON.parse(value) : tovarName;
    } catch (err) {
      return tovarName;
    }
  });
  useEffect(() => {
    if (storedTovar) {
      try {
        localStorage.setItem(code, JSON.stringify(storedTovar));
      } catch (err) {
        console.log(err);
      }
    }
  }, [storedTovar, code]);
  return [storedTovar, setStoredTovar];
};
