import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ data }) => {
  const { id, title, price, images } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="w-full min-h-52 bg-white shadow-sm rounded-lg flex flex-col items-center p-5 justify-evenly">
      <img src={images[0]} alt={title} />
      <div className="">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="">
          <button
            className="px-3 bg-gray-200 text-center font-semibold"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="w-10 text-center"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="px-3 bg-gray-200 text-center  font-semibold"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
