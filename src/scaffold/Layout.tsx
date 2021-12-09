/*
 * File: Layout.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import { PropsWithChildren } from "react";
import Footer from "component/common/Footer";
import { ThemeProvider } from "context/theme";

type Props = {};

const Layout = ({ children }: PropsWithChildren<Props>) => (
  <>
    <main>{children}</main>
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
