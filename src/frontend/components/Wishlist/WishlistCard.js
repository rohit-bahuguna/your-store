import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { MdDeleteOutline } from "react-icons/md"
import { calcPercentage, isProductInCart } from "../../utils/cartUtils";
import { toast } from "react-toastify";
import { useWishlistData } from "../../contexts/wishlistContext";
import { useCartData } from "../../contexts/cartContext/cartContext";

export default function WishlistCard({ product }) {
  const { token } = useAuthData();
  const navigate = useNavigate();
  const { cart, addProductToCart } = useCartData()
  const { removeProductFromWishlist } = useWishlistData()

  const isInCart = isProductInCart(cart, product.id);

  const moveToCartHandler = () => {
    removeProductFromWishlist(product._id, token);
    addProductToCart(product, token);
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

        </div>
        <div>
          <button
            className=" move-to-cart"
            onClick={() => (isInCart ? navigate("/cart") : moveToCartHandler())}
          >
            {isInCart ? "Already in Cart" : "Move to Cart"}
          </button>
        </div>
      </div>
      <MdDeleteOutline className="delete-icon"
        onClick={() => {
          removeProductFromWishlist(product._id, token)
        }}
      />
    </div>

  );
}
