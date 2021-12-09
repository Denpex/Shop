/*
 * File: Products.tsx
 * Project: *
 * Created: Tuesday, 23rd November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

import type { ProductList, Product } from "typings/product";
import { BsCart } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { fetchProducts } from "api";
import { Link } from "react-router-dom";
import { useCart } from "context/cart";

import Header from "component/common/Header";
import Table from "component/shop/Table";

function Shop() {
  const [data, setData] = useState<ProductList>([]);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useCart();

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    setLoading(true);
    const [res, err] = await fetchProducts();
    setLoading(false);

    if (err) {
      console.error(err);
      alert(`Error: ${err.name}\n\n${err.message}`);
      return;
    }

    if (!state.items) {
      setData(res!);
      return;
    }

    const items = state.items;
    const cleanItems = res!.filter((item) => !items.includes(item));
    setData([...cleanItems]);
  }

  const onBuy = (product: Product) => {
    dispatch.add?.(product);
    const copy = data.filter((item) => item.id !== product.id);
    setData(copy);
  };

  return (
    <div id="shop">
      <Header title="Shop" subtitle="The bust just for you!">
        <Link to="cart">
          <BsCart size="28" />
        </Link>
      </Header>
      <br />
      <Table data={data} onBuy={onBuy} />
      {loading && <BiLoaderAlt className="loading m-a" size="30" />}
    </div>
  );
}

export default Shop;
