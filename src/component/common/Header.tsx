/*
 * File: Header.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const Header = ({ title, subtitle, children }: Props) => (
  <div id="header" className="row">
    <div>
      <h1 className="m-0">{title}</h1>
      <em>{subtitle}</em>
    </div>
    {children}
  </div>
);

export default Header;
