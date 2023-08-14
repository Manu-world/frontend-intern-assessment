import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./product";

export const Shop = () => {
  const { PRODUCTS } = useContext(ShopContext);

  return (
    <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 gap-5 p-10 bg-gray-200">
      {PRODUCTS.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
};
