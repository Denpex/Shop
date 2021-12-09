/*
 * File: App.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import "style/water.min.css";
import "style/general.css";
import "style/animation.css";

import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { CartProvider } from "context/cart";
import Navigator from "scaffold/Navigator";
import Layout from "scaffold/Layout";

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <CartProvider>
          <Navigator />
        </CartProvider>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);

export default App;
