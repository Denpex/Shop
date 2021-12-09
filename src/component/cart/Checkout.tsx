/*
 * File: Checkout.tsx
 * Project: *
 * Created: Wednesday, 24th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { CSSProperties } from "react";

type Props = {
  subtotal?: number;
  tax?: number;
  total?: number;
  hidden?: boolean;
};

const style: CSSProperties = {
  maxWidth: "20rem",
  marginLeft: "auto",
  marginRight: "0px",
  textAlign: "end",
};

const Checkout = ({ subtotal, tax, total, hidden }: Props) => (
  <div style={style} hidden={hidden}>
    <h4>Checkout</h4>
    <div className="row">
      <strong>Subtotal</strong>${subtotal?.toFixed(2)  || 0}
    </div>
    <div className="row">
      <strong>Tax</strong>${tax?.toFixed(2) || 0}
    </div>
    <hr />
    <div className="row">
      <span>Total</span>
      <h3 className="m-0">${total?.toFixed(2)  || 0}</h3>
    </div>
    <br />
    <button className="m-0">Pay</button>
  </div>
);

export default Checkout;
