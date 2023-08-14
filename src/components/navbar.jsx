import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import { ShoppingCart, House } from "phosphor-react";
// import "./navbar.css";

export const Navbar = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="w-full pl-5 h-20 flex justify-between items-center shadow-md fixed bg-gray-200 top-0 z-10">
      <div
        className="flex justify-center
      items-center"
      >
        <Link to={"/"}>
          <img
            src="src\assets\sommalife.png"
            alt="sommalife-logo"
            className="w-8 rounded-full"
          />
        </Link>
        <p className="uppercase font-semibold ml-5">Sommalife</p>
      </div>
      <div className="w-[20%] flex items-center justify-around">
        <Link to="/" className="text-xl font-semibold flex items-center">
          <House size={32} />
        </Link>
        <Link
          to="/cart"
          className="relative flex items-center text-xl font-semibold"
        >
          <ShoppingCart size={32} />
          {totalAmount > 0 ? (
            <div className="w-4 h-4 rounded-full bg-blue-500 absolute -top-1 -right-1"></div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};
