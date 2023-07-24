import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  ProductListing,
  SignUp, LogIn,
  Cart,
  ProductDetails,
  Checkout,
  UserProfile,
  Wishlist,
  OrderSummaryPage,
  PrivateRoute,
  IsAuthenticated
} from "./frontend/components";


function App() {
  return (
    <div className=" w-full flex ">
      <Routes>

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
    </div>
  );
}

export default App;