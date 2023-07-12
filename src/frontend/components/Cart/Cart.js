import React from "react";
import { useState, useEffect } from "react";


import { CartPrice } from "./CartPrice";
import { CartProduct } from "./CartProduct";
import { CouponModal } from "./CouponModal";
import { useProductData } from "../../contexts/productContext/productContext";
import { useCartData } from "../../contexts/cartContext/cartContext";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import { useWishlistData } from "../../contexts/wishlistContext";

export function Cart() {
  const { cart } = useCartData();
  const { wishlist } = useWishlistData()
  const { changeTitle } = useProductData()
  const isCartHasItem = cart.length > 0;

  useEffect(() => { changeTitle("Cart") }, []);

  return (
    <Layout>
      <div className="mb-[24vh]">
        <div className="px-5 relative ">

          <div className="flex">
            <div className="flex flex-col gap-5 px-10 justify-center items-center">
              {isCartHasItem ? (
                cart.map((product) => <CartProduct key={product._id} product={product} />)
              ) : (
                <div className="empty-cart">
                  <h2 > Your Cart Is Empty</h2>

                  <img src="/images/empty-cart.avif" className="empty-cart-image" />
                  <div>
                    {wishlist.length > 0 && <Link to="/wishlist">
                      <button className="explore-products">
                        Go To Wishlist
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
            <div className="fixed top-24 border  rounded-xl w-1/4 right-20 ">
               {isCartHasItem && <CartPrice/>}
           </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
