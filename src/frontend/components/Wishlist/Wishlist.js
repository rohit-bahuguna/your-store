import React from "react";
import { useWishlistData } from "../../contexts/wishlistContext";
import { useProductData } from "../../contexts/productContext/productContext";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import { useCartData } from "../../contexts/cartContext/cartContext";
import ProductLongCard from "../common/ProductLongCard";
export function Wishlist() {
  const { wishlist } = useWishlistData();
  const { cart } = useCartData()
  const { changeTitle } = useProductData()
  const isWishlistHasItem = wishlist.length > 0;

  changeTitle("Wishlist")
  return (
    <Layout>
      <div className="flex justify-center px-5 py-5 ">

        {isWishlistHasItem ? (
          <div className="px-5">
            <h1 className="text-center text-2xl font-semibold mb-5">My Wishlist ( {wishlist.length} )</h1>
            <div className="grid md:grid-cols-2  gap-5 ">
              {wishlist.map((product) => (
                <ProductLongCard
                  key={product._id}
                  product={product}
                  from={"wishlist"}

                />
              ))}
            </div>
          </div>
        ) : (

            <div className="flex flex-col items-center py-5 gap-14">
              <h2 className="text-2xl font-semibold"> Your Wishlist Is Empty</h2>

              <img loading="lazy" src="/images/empty-wishlist.png" className="  h-auto " />
              <div className="flex  md:gap-10 gap-5">
                {cart.length > 0 && <Link to="/cart">
                  <button className="btnIndigo">
                    View Cart
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
    </Layout>
  );
}
