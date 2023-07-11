import React, { useEffect } from "react";
import { useWishlistData } from "../../contexts/wishlistContext";
import WishlistCard from "./WishlistCard";

import { useProductData } from "../../contexts/productContext/productContext";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import { useCartData } from "../../contexts/cartContext/cartContext";
export function Wishlist() {
  const { wishlist } = useWishlistData();
  const { cart } = useCartData()
  const { changeTitle } = useProductData()
  const isWishlistHasItem = wishlist.length > 0;

  changeTitle("Wishlist")
  return (
    <Layout>
      <div className="wishlist-container">
        <div className="wishlist-main-container ">

          {isWishlistHasItem ? (
            <div className="wishlist-manage">
              <div className="wishlist">
                {wishlist.map((product) => (
                  <WishlistCard
                    key={product._id}
                    product={product}

                  />
                ))}
              </div>
            </div>
          ) : (

            <div className="empty-cart">
              <h2 > Your Wishlist Is Empty</h2>

              <img src="/images/empty-wishlist.png" className="empty-cart-image" />
              <div>
                {cart.length > 0 && <Link to="/cart">
                  <button className="explore-products">
                    Go To Cart
                  </button>
                </Link>}
                <Link to="/products">
                  <button className="explore-products">
                    Explore Products
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
