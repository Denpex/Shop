/*
 * File: context.tsx
 * Project: *
 * Created: Thursday, 25th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { PropsWithChildren } from "react";
import type { ProductList, Product } from "typings/product";
import type {
  CartContext,
  CartContextDispatch,
  CartContextState,
  CartTotal,
} from "typings/cart";

import { createContext, useState, useContext } from "react";

// - Context
const initialTotal: CartTotal = { total: 0, subtotal: 0, tax: 0 };
const Context = createContext([{}, {}] as CartContext);

// - Provider
const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  // State
  const [items, setItems] = useState<ProductList>([]);
  const [total, setTotal] = useState<CartTotal>(initialTotal);

  // Dispatch
  const onAdd = (product: Product) => {
    const newItems = [...items, product];
    const newTotal = appendTotal(total, product);

    setItems(newItems);
    setTotal(newTotal);
  };

  const onRemove = (productId: string) => {
    const index = items.findIndex((item) => item.id === productId);
    if (index === -1) return;

    const newItems = [...items];
    const removed = newItems.splice(index, 1);
    const newTotal = subtractTotal(total, removed[0]);

    setItems(newItems);
    setTotal(newTotal);
  };

  const appendTotal = (currenTotal: CartTotal, product: Product) => {
    const productTotal = calculateTotal(product);
    const newTotal = { ...currenTotal };
    newTotal.total += productTotal.total;
    newTotal.subtotal += productTotal.subtotal;
    newTotal.tax += productTotal.tax;
    return newTotal;
  };

  const subtractTotal = (currentTotal: CartTotal, product: Product) => {
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

  // Combine
  const state: CartContextState = { items, total };
  const dispatch: CartContextDispatch = { add: onAdd, remove: onRemove };
  const props: CartContext = [state, dispatch];

  return <Context.Provider value={props} children={children} />;
};

// - Hook
const useCart = (): CartContext => useContext(Context);

// - Exports
export { CartProvider, useCart };
