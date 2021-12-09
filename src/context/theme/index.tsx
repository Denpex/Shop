/*
 * File: index.ts
 * Project: *
 * Created: Friday, 26th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type {
  ThemeContext,
  ThemeContextState,
  ThemeContextDispatch,
  Theme,
} from "typings";
import type { PropsWithChildren } from "react";

import { createContext, useState, useContext } from "react";

// - Context
const defaultState: ThemeContext = [{ theme: "light" }, {}];
const Context = createContext(defaultState);

// - Provider
const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  // State
  const [theme, setTheme] = useState<Theme>("light");

  // Actions
  const onToggle = (newTheme: Theme) => {
    console.log({ newTheme });

    setTheme(newTheme);
    // set theme
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Combine
  const state: ThemeContextState = { theme };
  const dispatch: ThemeContextDispatch = { toggle: onToggle };
  const values: ThemeContext = [state, dispatch];

  return <Context.Provider value={values} children={children} />;
};

// - Hook
const useTheme = (): ThemeContext => useContext(Context);

// - Exports
export { ThemeProvider, useTheme };
