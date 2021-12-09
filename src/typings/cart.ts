/*
 * File: cart.ts
 * Project: *
 * Created: Friday, 26th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { ContextResult } from "./context";
import type { ProductList, Product } from "./product";

export type CartTotal = {
  subtotal: number;
  tax: number;
  total: number;
};

export type CartContextState = Partial<{
  items: ProductList;
  total: CartTotal;
}>;

export type CartContextDispatch = Partial<{
  add: (product: Product) => void;
  remove: (productId: string) => void;
}>;

export type CartContext = ContextResult<CartContextState, CartContextDispatch>;
