import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { calcPercentage, isProductInCart, isProductInWishlist } from "../../utils/cartUtils";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useWishlistData } from "../../contexts/wishlistContext";

const ProductVerticalCard = ({ product, from = "" }) => {
    const navigate = useNavigate();
    const { token } = useAuthData();
    const { wishlist, updateProductQtyFromCart, removeProductFromCart } = useCartData()
    const { addProductToWishlist } = useWishlistData()

    const { cart, addProductToCart } = useCartData()
    const { removeProductFromWishlist } = useWishlistData()

    const isInCart = isProductInCart(cart, product.id);

    const isInWishlist = isProductInWishlist(wishlist, product.id);

    const incOrDecProductQuantity = (type) => updateProductQtyFromCart(product._id, token, type);

    const moveToWishlistFromCart = () => {
        addProductToWishlist(product, token);
        removeProductFromCart(product._id, token);
    };

    const moveToCartHandler = () => {
        removeProductFromWishlist(product._id, token);
        addProductToCart(product, token);
    };

    return (
        <div key={product._id} className="flex  hover:shadow-lg px-5 hover:border rounded-xl gap-5  ">
            <div className=" w-[25%] ">

                <Link to={`/product-details/${product.id}`}>
                    <img className=" h-auto" src={product.image} alt={product.title} />
                </Link>
            </div>
            <div className="grow py-2 ">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">

                        <h2 className="font-semibold text-lg">{product.title} {product.quantity} {product.scale}</h2>
                        <p className="sold-by">Sold By : <span className="text-gray-400">{product.soldBy}</span></p>

                    </div>
                    <div className="flex gap-10 items-center font-semibold">
                        <p className="disc-price">₹{product.price}</p>
                        <p className="text-gray-400 line-through">₹{product.originalPrice}</p>
                        <p className="text-green-900  bg-green-100 px-2 py-1 rounded-full">({product.percentageOff}% OFF)</p>
                    </div>
                    <div className="flex gap-3 text-lg font-semibold">

                        <button className="hover:bg-gray-300 px-1  py-1 rounded-full " onClick={() => product.qty > 1 &&
                            incOrDecProductQuantity("DEC_QTY")}
                            disabled={product.qty > 1 ? false : true}
                        >
                            <AiOutlineMinus className="text-2xl hover:text-red-500   " />
                        </button>
                        <span>{product.qty}</span>
                        <button className="hover:bg-gray-300 px-1  py-1 rounded-full " onClick={() => incOrDecProductQuantity("INC_QTY")}
                        >
                            <AiOutlinePlus className="text-2xl hover:text-indigo-700   " />
                        </button>
                    </div>
                </div>
                <div className="flex gap-10 mt-5">
                    {
                        from === "" ? <>
                            <button className="btnRed" onClick={() => {
                                removeProductFromCart(product._id, token);
                            }}
                            >
                                REMOVE
                            </button>
                            <button className="btnIndigo" onClick={() =>
                                (isInWishlist ? navigate("/wishlist") : moveToWishlistFromCart())}
                            >
                                {isInWishlist ? "ALREADY IN WISHLIST" : "MOVE TO WISHLIST"}
                            </button>
                        </> : <>
                                <button className="btnRed" onClick={() => {
                                removeProductFromWishlist(product._id, token)
                            }}
                            >
                                REMOVE
                            </button>
                                <button className="btnIndigo" onClick={() => (isInCart ? navigate("/cart") : moveToCartHandler())}
                            >
                                    {isInCart ? "View in Cart" : "Move to Cart"}
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductVerticalCard



