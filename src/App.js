import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./frontend/components/Auth/Login";
import HomePage from "./frontend/components/Home/HomePage";
import MockMan from "mockman-js"
import SignUp from "./frontend/components/Auth/SignUp";
import { ProductListing } from "./frontend/components/Product/Product";
import { ProductDetails } from "./frontend/components/Product/ProductDetails";
import { Cart } from "./frontend/components";
import { Checkout } from "./frontend/components/Checkout/Checkout";
import { OrderSummary } from "./frontend/components/OrderSummary/OrderSummary";
import { UserProfile } from "./frontend/components/UserProfile/UserProfile";
import { Wishlist } from "./frontend/components/Wishlist/Wishlist";
import PrivateRoute, { IsAuthenticated } from "./frontend/components/Auth/PrivateRoute";
import OrderSummaryPage from "./frontend/components/OrderSummary/OrderSummaryPage";

function App() {
  return (
    <>
      <Routes>

        <Route path="/mockman" element={<MockMan />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:category" element={<ProductListing />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />

        <Route element={<IsAuthenticated />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;