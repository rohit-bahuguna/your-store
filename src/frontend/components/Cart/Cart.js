import React from "react";
import { useState, useEffect } from "react";

import { CartPrice } from "./CartPrice";
import { useProductData } from "../../contexts/productContext/productContext";
import { useCartData } from "../../contexts/cartContext/cartContext";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import { useWishlistData } from "../../contexts/wishlistContext";
import ProductVerticalCard from "../common/ProductVerticalCard";

export function Cart() {
  const { cart } = useCartData();
  const { wishlist } = useWishlistData()
  const { changeTitle } = useProductData()
  const isCartHasItem = cart.length > 0;

  useEffect(() => { changeTitle("Cart") }, []);

  return (
    <Layout>
      <div className="mb-[24vh] ">
        <div className="px-5  relative ">

          <div className="flex w-full">
            <div className="flex  flex-col gap-5  justify-center ">
              {isCartHasItem ? (
                cart.map((product) => <ProductVerticalCard key={product._id} product={product} />)
              ) : (

                  <div className="flex flex-col text-lg  items-center justify-center  border ">
                    <h2 className="font-semibold" > Your Cart Is Empty</h2>

                    <img src="/images/empty-cart.avif" className="w-[50%] h-auto" />
                    <div className="flex gap-10 ">
                      {wishlist.length > 0 && <Link to="/wishlist">
                        <button className="border px-5 py-1 text-indigo-700 hover:bg-indigo-100 border-indigo-700 rounded-full text-lg">
                          Go To Wishlist
                        </button>
                      </Link>}
                      <Link to="/products">
                        <button className="border px-5 py-1 text-indigo-700 hover:bg-indigo-100 border-indigo-700 rounded-full text-lg">
                          Explore Products
                        </button>
                      </Link>
                    </div>
                  </div>

              )}
            </div>
            {isCartHasItem && <div className="fixed top-24 border  rounded-xl w-1/4 right-20 ">
              <CartPrice />
            </div>}
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
