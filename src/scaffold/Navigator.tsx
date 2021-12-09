/*
 * File: Navigator.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import { Routes, Route } from "react-router-dom";

import Shop from "page/Shop";
import Cart from "page/Cart";

const Navigator = () => (
  <Routes>
    <Route path="/" element={<Shop />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<h1>Page not found...</h1>} />
  </Routes>
);

export default Navigator;
