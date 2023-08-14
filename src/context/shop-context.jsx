import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [PRODUCTS, setPRODUCTS] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setPRODUCTS(data.products);
    }
    getData();
  }, []); // Empty dependency array to run the effect only once on mount

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
      cart[PRODUCTS[i].id] = 0;
    }
    return cart;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    PRODUCTS,
    ShopContextProvider,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
