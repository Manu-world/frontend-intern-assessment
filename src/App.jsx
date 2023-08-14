import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CheckoutSuccessful from "./pages/CheckoutSuccessful";

function App() {
  return (
    <div className="pt-24 bg-gray-200 min-h-screen">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccessful />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
