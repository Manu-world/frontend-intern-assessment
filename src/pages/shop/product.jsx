import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = ({ data }) => {
  const { id, title, price, images } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartItemCount = cartItems[id];

  return (
    <div className="w-full bg-white shadow-sm rounded-lg flex flex-col items-center p-5 justify-between">
      <div className="flex items-center w-[90%] ">
        <img src={images[0]} alt={title} className="h-48 w-full" />
      </div>
      <div className="text-center my-2">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <button
          className="bg-violet-200 hover:bg-violet-300 text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
          onClick={() => navigate("/details", { state: { data } })}
        >
          view details
        </button>
      </div>
    </div>
  );
};
