/*
 * File: context.tsx
 * Project: *
 * Created: Wednesday, 1st December 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { CartContext, CartContextState } from "typings";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { bindActionCreators } from "util/binder";

import { reducer } from "./reducer";
import * as CartActionCreators from "./actions";

// - Context
const initialState: CartContextState = {
  items: [],
  total: { total: 0, subtotal: 0, tax: 0 },
};

const initialContext = [initialState, {}] as CartContext;

const Context = createContext(initialContext);

// - Provider
const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialContext[0]);
  const actionCreators = bindActionCreators(CartActionCreators, dispatch);
  const values = [state, actionCreators] as CartContext;
  return <Context.Provider value={values} children={children} />;
};

// - Hook
const useCart = () => useContext(Context);

// - Exports
export { CartProvider, useCart };
