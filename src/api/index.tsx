/*
 * File: index.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { Response, ProductList } from "typings";

function sleep(ms: number = Math.random() * 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchProducts(): Response<ProductList> {
  try {
    await sleep();
    const module = await import("data/products.json");
    return [module.default, null];
  } catch (error) {
    return [null, error as Error];
  }
}
