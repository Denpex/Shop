/*
 * File: reducer.ts
 * Project: *
 * Created: Thursday, 25th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type {
  ContextAction,
  CartContextState,
  CartTotal,
  Product,
} from "typings";

// - Types
enum Action {
  add = "cart/add",
  delete = "cart/delete",
}

// - Helpers
const appendToTotal = (currentTotal: CartTotal, product: Product) => {
  const productTotal = calculateTotal(product);
  const newTotal = { ...currentTotal };
  newTotal.total += productTotal.total;
  newTotal.subtotal += productTotal.subtotal;
  newTotal.tax += productTotal.tax;
  return newTotal;
};

const subtractOffTotal = (currentTotal: CartTotal, product: Product) => {
  const removedTotal = calculateTotal(product);
  const newTotal = { ...currentTotal };
  newTotal.total -= removedTotal.total;
  newTotal.subtotal -= removedTotal.subtotal;
  newTotal.tax -= removedTotal.tax;
  return newTotal;
};

const calculateTotal = (product: Product): CartTotal => {
  const _subtotal = product.price;
  const _tax = (product.tax / 100) * product.price;
  const _total = _subtotal + _tax;
  return { total: _total, tax: _tax, subtotal: _subtotal };
};

// - Reducer
const reducer = (
  state: Partial<CartContextState>,
  action: ContextAction<any>,
) => {
  const { type, payload } = action;
  console.log(`Context: ${type}`);
  console.log(`Payload: ${JSON.stringify(payload, null, 2)}`);
  console.log(`Context state:`, state);

  switch (type) {
    case Action.add:
      const { product } = payload;
      const newItems = state.items?.concat([product]);
      const newTotal = appendToTotal(state.total!, product);
      return { ...state, items: newItems, total: newTotal };
    case Action.delete:
      const { productId } = payload;
      const { items, total } = state;
      const index = items?.findIndex((it) => it.id === productId);
      if (index === undefined || index === -1) return state;
      const _items = [...items!];
      const _item = _items.splice(index, 1);
      const _total = subtractOffTotal(total!, _item[0]);
      return { ...state, items: _items, total: _total };
    default:
      throw new Error(`Undefined type: ${type} for cart reducer.`);
  }
};

// - Exports
export { reducer, Action };
