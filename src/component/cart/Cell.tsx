/*
 * File: Cell.tsx
 * Project: *
 * Created: Wednesday, 24th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { Product } from "typings";
import { IoMdRemoveCircle } from "react-icons/io";
import { CSSProperties } from "react";
import { useCart } from "context/cart";

const deleteStyle: CSSProperties = {
  cursor: "pointer",
  display: "inline",
  color: "tomato",
};

const titleStyle: CSSProperties = {
  textTransform: "uppercase",
};

const Cell = (product: Product) => {
  const [, dispatch] = useCart();

  return (
    <table key={product.id}>
      <caption>
        <div className="row">
          <h3 style={titleStyle}>{product.name}</h3>
          <IoMdRemoveCircle
            size="25"
            style={deleteStyle}
            onClick={() => dispatch.remove?.(product.id)}
          />
        </div>
      </caption>
      <tbody>
        <tr>
          <th scope="row">Brand</th>
          <td align="right" valign="middle">
            {product.brand}
          </td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td align="right">{product.description}</td>
        </tr>
        <tr>
          <th scope="row">Tags</th>
          <td align="right">{product.tags}</td>
        </tr>
        <tr>
          <th scope="row">Price</th>
          <td align="right">${product.price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cell;
