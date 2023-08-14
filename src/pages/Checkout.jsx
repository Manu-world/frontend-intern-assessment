import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { images, title, id, price } = state.data;
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  return (
    <div className=" flex flex-col items-center gap-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold">Your order summary</h2>
        <div className="p-5 bg-white text-center">
          <img
            src={images[0]}
            alt={title}
            className=""
            style={{ width: 200 }}
          />
          <p>{title}</p>
          <p>${price}</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3"
        >
          <input
            type="number"
            placeholder="phone number"
            className="rounded-md p-2"
            required
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mb-5"
            onClick={() => {
              checkout();
              navigate("/checkout-success");
            }}
            type="submit"
          >
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
