/*
 * File: api.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

export type Product = {
  id: string;
  name: string;
  sold: number;
  brand: string;
  country: string;
  description: string;
  tags: string;
  price: number;
  tax: number;
};

export type ProductList = readonly Product[];
