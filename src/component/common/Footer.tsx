/*
 * File: Footer.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { Theme } from "typings/theme";
import { useTheme } from "context/theme";

type SwitchProps = {
  submit: (event: any) => void;
  value: Theme;
};

const ThemeSwitch = ({ submit, value }: SwitchProps) => (
  <div>
    <input
      type="radio"
      value="dark"
      name="theme"
      id="theme-dark"
      onChange={submit}
      checked={value === "dark"}
    />
    <label htmlFor="theme-dark">Dark 🌙</label>
    {"  "}
    <input
      type="radio"
      value="light"
      name="theme"
      id="theme-light"
      onChange={submit}
      checked={value === "light"}
    />
    <label htmlFor="theme-light">Light ☀️</label>
  </div>
);

const Footer = () => {
  const [state, dispatch] = useTheme();

  const onToggle = (event: any) => {
    const newValue = event.currentTarget.value as Theme;
    dispatch.toggle?.(newValue);
  };

  return (
    <div id="footer">
      <br />
      <hr />
      <br />
      <div className="row">
        <code>
          Copyright © <em>Mehdi R.</em>
        </code>
        <ThemeSwitch submit={onToggle} value={state.theme || "light"} />
      </div>
    </div>
  );
};

export default Footer;
