import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { calcPercentage, isProductInWishlist } from "../../utils/cartUtils";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useWishlistData } from "../../contexts/wishlistContext";

export function CartProduct({ product }) {

  const navigate = useNavigate();
  const { token } = useAuthData();
  const { wishlist, updateProductQtyFromCart, removeProductFromCart } = useCartData()
  const { addProductToWishlist } = useWishlistData()


  const isInWishlist = isProductInWishlist(wishlist, product.id);

  const incOrDecProductQuantity = (type) => updateProductQtyFromCart(product._id, token, type);

  const moveToWishlistFromCart = () => {
    addProductToWishlist(product, token);
    removeProductFromCart(product._id, token);
  };

  return (
    <div key={product._id} className="card horizontal-container">
      <div className="card-horizontal">

        <Link to={`/product-details/${product.id}`}>
          <img className="card-img horizontal-img" src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className="card-right">
        <div className="card-info">
          <div className="card-title">
            <div>
              <h2>{product.title} {product.quantity} {product.scale}</h2>
              <p className="sold-by">Sold By : {product.soldBy}</p>
            </div>
          </div>
          <div className="price">
            <p className="disc-price">₹{product.price}</p>
            <p className="actual-price">₹{product.originalPrice}</p>
            <p className="price-percentage">({product.percentageOff}% OFF)</p>
          </div>
          <div className="qty">

            <button
              className="qty-btn"
              onClick={() => product.qty > 1 && incOrDecProductQuantity("DEC_QTY")}
              disabled={product.qty > 1 ? false : true}
            >
              <AiOutlineMinus className="minus" />
            </button>
            <span className="qty-count">{product.qty}</span>
            <button
              className="qty-btn"
              onClick={() => incOrDecProductQuantity("INC_QTY")}
            >
              <AiOutlinePlus className="add" />
            </button>
          </div>
        </div>
        <div>
          <button
            className="remove-btn"
            onClick={() => {
              removeProductFromCart(product._id, token);
            }}
          >
            REMOVE
          </button>
          <button
            className="wishlist-btn"
            onClick={() => (isInWishlist ? navigate("/wishlist") : moveToWishlistFromCart())}
          >
            {isInWishlist ? "ALREADY IN WISHLIST" : "MOVE TO WISHLIST"}
          </button>
        </div>
      </div>
    </div>
  );
}
