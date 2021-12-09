/*
 * File: actions.ts
 * Project: *
 * Created: Wednesday, 1st December 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { ContextAction, Product } from "typings";
import { Action } from "./reducer";

export const add = (product: Product): ContextAction<Product> => ({
  type: Action.add,
  payload: { product },
});

export const remove = (productId: string): ContextAction<string> => ({
  type: Action.delete,
  payload: { productId },
});
