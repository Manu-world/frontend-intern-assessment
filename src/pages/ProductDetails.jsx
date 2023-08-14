import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    images,
    title,
    id,
    price,
    description,
    rating,
    discountPercentage,
    category,
    brand,
  } = state.data;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center mb-7">
        <h2 className="text-3xl font-bold">Product details</h2>
      </div>

      <div className="w-[80%] flex justify-center min-h-52 gap-5">
        <div className="min-h-full">
          <img src={images[0]} alt={title} style={{ width: 200 }} />
        </div>

        <div className="flex flex-col gap-1">
          <p className="">{title}</p>
          <p className="">Brand: {brand}</p>
          <p>price: ${price}</p>
          <p>Category: {category}</p>
          <p>Discount: {discountPercentage}</p>
          <p>Rating: {rating}</p>
          <p>Description: {description}</p>
        </div>
      </div>

      <div className="flex justify-center w-full mt-5">
        <button
          className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
          onClick={() => {
            navigate("/checkout", { state: { data: state.data } });
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
