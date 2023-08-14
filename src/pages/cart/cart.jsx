import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
// import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, PRODUCTS } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-full text-center font-bold">
        <h1>Your Cart Items</h1>
      </div>
      <div className="w-full text-xl text-end font-bold pr-36 ">
        <p> Subtotal: ${totalAmount} </p>
      </div>
      <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 gap-5 p-10 bg-gray-200">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="w-full flex justify-center gap-10 pb-10">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
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
