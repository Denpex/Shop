/*
 * File: Cart.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "context/cart";

import Header from "component/common/Header";
import Cell from "component/cart/Cell";
import CellEmpty from "component/cart/CellEmpty";
import Checkout from "component/cart/Checkout";

const Cart = () => {
  const [state] = useCart();
  const { items, total } = state;

  return (
    <div id="cart">
      <Header title="Cart" subtitle="View all items in cart.">
        <Link to="/" replace>
          <MdCancel size="32" />
        </Link>
      </Header>
      <CellEmpty show={!items?.length} />
      {items?.map(Cell)}
      <Checkout
        hidden={!items?.length}
        total={total?.total}
        subtotal={total?.subtotal}
        tax={total?.tax}
      />
    </div>
  );
};

export default Cart;
