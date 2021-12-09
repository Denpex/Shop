/*
 * File: Table.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { ProductList, Product } from "typings/product";

type Props = {
  data: ProductList;
  onBuy?: (product: Product) => void;
};

const Table = ({ data, onBuy }: Props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Sold</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td valign="middle">
            <strong>{item.name}</strong>
          </td>
          <td valign="middle">{item.country}</td>
          <td valign="middle">{item.sold}x</td>
          <td valign="middle">${item.price}</td>
          <td valign="middle" align="right">
            <button className="m-0" onClick={() => onBuy?.(item)}>
              Buy
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
