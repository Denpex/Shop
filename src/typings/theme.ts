/*
 * File: theme.ts
 * Project: *
 * Created: Friday, 26th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { ContextResult } from "./context";

export type Theme = "light" | "dark";

export type ThemeContextState = {
  theme: Theme;
};

export type ThemeContextDispatch = {
  toggle: (theme: Theme) => void;
};

export type ThemeContext = ContextResult<
  ThemeContextState,
  ThemeContextDispatch
>;
