import React from "react";
import { useState, useEffect } from "react";

import { CartPrice } from "./CartPrice";
import { useProductData } from "../../contexts/productContext/productContext";
import { useCartData } from "../../contexts/cartContext/cartContext";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import { useWishlistData } from "../../contexts/wishlistContext";
import ProductVerticalCard from "../common/ProductVerticalCard";
import { useAuthData } from "../../contexts/AuthContext/authContext";

export function Cart() {
  const { cart, clearCartProducts } = useCartData();
  const { wishlist } = useWishlistData()
  const { changeTitle } = useProductData()
  const { token } = useAuthData()
  const [proceedToBuy, setProceedToBuy] = useState(false)
  const isCartHasItem = cart.length > 0;

  useEffect(() => { changeTitle("Cart") }, []);

  return (
    <Layout>
      <div className="min-h-[60vh] py-5">

        <div className="md:px-5  relative ">
          {isCartHasItem && <div className={`fixed ${!proceedToBuy && "hidden"} md:block top-16 py-20 md:py-0 md:top-24 border  rounded-xl md:w-1/4 bg-white right-0 left-0 md:left-[70%] md:right-20  h-screen md:h-auto`}>

            <CartPrice />
          </div>}
          <div className="flex w-full">

            <div className="flex w-full flex-col gap-5  justify-center ">

              {isCartHasItem ? (
                <div className="md:w-[65%]  flex flex-col gap-5">
                  <div className=" mb-2 flex gap-3 self-end  px-3">

                    <button className=" btnRed"
                      onClick={() => clearCartProducts(cart, token)}
                    >
                      Clear Cart
                    </button>

                    <button className=" md:hidden btnIndigo bg-indigo-100 font-medium text-lg  "
                      onClick={() => setProceedToBuy(true)}
                    >
                      Proceed To Buy ( {cart.length} )
                    </button>
                  </div>

                  {cart.map((product) => <ProductVerticalCard key={product._id} product={product} />)}
                </div>

              ) : (

                  <div className="flex flex-col text-lg  gap-10 items-center justify-center   ">
                    <h2 className=" text-2xl font-semibold" > Your Cart Is Empty</h2>

                    <img src="/images/empty-cart.avif" className="md:w-[30%] h-auto" />
                    <div className="flex md:gap-10 gap-3 justify-center  w-screen  " >
                      {wishlist.length > 0 && <Link to="/wishlist">
                        <button className="btnIndigo">
                          View Wishlist
                        </button>
                      </Link>}
                      <Link to="/products">
                        <button className="btnIndigo">
                          Explore Products
                        </button>
                      </Link>
                    </div>
                  </div>

              )}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
