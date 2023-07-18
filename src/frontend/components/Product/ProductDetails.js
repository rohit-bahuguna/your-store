import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Layout from "../common/Layout"
import { isProductInCart, isProductInWishlist } from "../../utils/cartUtils";
import { useProductData } from "../../contexts/productContext/productContext";
import { AiOutlineHeart, AiFillTag, AiOutlineShoppingCart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { useWishlistData } from "../../contexts/wishlistContext";
import { BsCartCheck } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md"

export function ProductDetails() {
  const { productId } = useParams();

  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { products, changeTitle } = useProductData();
  const { cart, addProductToCart } = useCartData();
  const { wishlist, addProductToWishlist, removeProductFromWishlist } = useWishlistData()
  const { token } = useAuthData();

  const product = products?.find((item) => {
    return item.id === productId;
  });



  const { id, image, title, rating, description, originalPrice, percentageOff, price, Brand, Manufacturer, soldBy,
    quantity, scale, category, countryOfOrigin, foodType } = product

  const isInCart = isProductInCart(cart, id);
  const isInWishlist = isProductInWishlist(wishlist, id);

  const addToCartHandler = () => {
    token
      ? isInCart
        ? navigate('/cart')
        : addProductToCart(product, token)
      : navigate('/login');
  };


  const wishlistHandler = () => {
    token
      ? isInWishlist
        ? removeProductFromWishlist(id, token)
        : addProductToWishlist(product, token)
      : navigate('/login');
  };

  useEffect(() => {
    changeTitle(title)
  }, [])


  return (
    <Layout>
      <div className="flex mb-3 md:flex-row flex-col md:gap-0 gap-5">

        <div className="basis-1/3 flex flex-col">
          <MdKeyboardBackspace className="ml-6 hover:text-sky-800 hover:cursor-pointer text-3xl" onClick={() => navigate(-1)} />
          <img className="w-full r h-auto" src={image} alt="" />



          {isInCart ? <button className={` border hover:text-indigo-700 text-sky-500 hover:border-indigo-700 flex items-center
        gap-3 border-sky-500 self-center px-5 py-1 rounded-full text-xl`} disabled={btnDisabled} onClick={() =>
              addToCartHandler()}
          >


            <BsCartCheck className="inline text-2xl" /> Go to Cart

          </button> :
            <button className={`border text-indigo-700 hover:text-sky-500 hover:border-sky-500 flex items-center gap-3
        border-indigo-700 self-center px-5 py-1 rounded-full text-xl`} disabled={btnDisabled} onClick={() =>
                addToCartHandler()}
            >

              <AiOutlineShoppingCart className="inline text-2xl" /> Add to Cart

            </button>}


        </div>

        <div className="basis-2/3 flex flex-col gap-5 px-5">
          <div className=" flex flex-col gap-2">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">{title}</h2>
              {isInWishlist ?
                <AiFillHeart className='text-3xl text-red-500' onClick={wishlistHandler} /> :
                <AiOutlineHeart className="text-3xl hover:text-red-500 " onClick={wishlistHandler} />}
            </div>
            <p className="flex gap-1 items-center">
              {rating} 4.9
              <AiFillStar className="text-xl text-yellow-500" />

            </p>

            <div className="flex gap-2 items-center "> <span className="font-semibold text-lg">M.R.P: ₹ {price}</span> <span>(Incl. of all taxes) </span>
              <span>(₹ {price / 4}/250g)</span>
            </div>
            <div className="flex gap-8 items-center">
              <p className="actual-price text-gray-500 line-through">₹ {originalPrice}</p>
              <p className="text-green-900  bg-green-100 px-2 py-1 rounded-full">{percentageOff}% OFF</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">

            <p className="flex items-center gap-1 ">
              <AiFillTag className="text-sky-600" /> <span>Fastest Delivery</span>
            </p>
            <p className="flex items-center gap-1 ">
              <AiFillTag className="text-sky-600" /> <span>Inclusive of All Taxes</span>
            </p>
            <p className="flex items-center gap-1 ">
              <AiFillTag className="text-sky-600" /> <span>Cash On Delivery Available</span>
            </p>
          </div>
          <div className=" mb-1">
            <h2 className="text-lg font-semibold">Description</h2>
            <p >{description}</p>
          </div>

          <div >
            <h2 className="text-lg font-semibold">Product Information</h2>

            <table>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>
                    <p>{Brand}</p>
                  </td>
                </tr>
                <tr>
                  <td>Manufacturer</td>
                  <td>
                    <p>{Manufacturer}</p>
                  </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>
                    <p>{category}</p>
                  </td>
                </tr>
                <tr>
                  <td> Sold By</td>
                  <td>
                    <p>{soldBy}</p>
                  </td>
                </tr>
                <tr>
                  <td> Food Type</td>
                  <td>
                    <p>{foodType}</p>
                  </td>
                </tr>
                <tr>
                  <td>Country of Origin</td>
                  <td>
                    <p>{countryOfOrigin}</p>
                  </td>
                </tr>
                <tr>
                  <td> Net Quantity</td>
                  <td>
                    <p>{quantity} {scale}</p>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>


        </div>

      </div>
    </Layout>
  )

}