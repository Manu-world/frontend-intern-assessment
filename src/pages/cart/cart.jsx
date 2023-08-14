import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, PRODUCTS } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-full font-bold text-center">
        <h1>Your Cart Items</h1>
      </div>
      <div className="w-full text-xl font-bold text-end pr-36 ">
        <p> Subtotal: ${totalAmount} </p>
      </div>
      <div className="grid w-full gap-5 p-10 bg-gray-200 sm:grid-cols-3 md:grid-cols-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="flex justify-center w-full gap-10 pb-10">
          <button
            className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button
            className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            onClick={() => {
              navigate("/checkout-success");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1 className="w-full text-center"> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
