import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import { ShoppingCart, House } from "phosphor-react";

export const Navbar = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="fixed top-0 z-10 flex items-center justify-between w-full h-20 pl-5 bg-gray-200 shadow-md">
      <div className="flex items-center justify-center">
        <Link to={"/"}>
          <img
            src="src\assets\sommalife.png"
            alt="sommalife-logo"
            className="w-8 rounded-full"
          />
        </Link>
        <p className="ml-5 font-semibold uppercase">Sommalife</p>
      </div>
      <div className="w-[20%] flex items-center justify-around">
        <Link
          to="/"
          className="flex items-center text-xl font-semibold active:bg-gray-100"
        >
          <House size={32} />
        </Link>
        <Link
          to="/cart"
          className="relative flex items-center text-xl font-semibold active:bg-gray-100"
        >
          <ShoppingCart size={32} />
          {totalAmount > 0 ? (
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -top-1 -right-1"></div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};
