import { useState } from 'react';
import { useNavigate } from 'react-router';

import {
	calcPercentage,
	isProductInCart,
	isProductInWishlist
} from '../../utils/cartUtils';

import { toast } from 'react-toastify';
import { BsCartCheck } from "react-icons/bs"
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai';
import { useCartData } from '../../contexts/cartContext/cartContext';
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { useWishlistData } from '../../contexts/wishlistContext';

export function ProductCard({ product }) {
	const { cart, addProductToCart } = useCartData();
	const { wishlist, addProductToWishlist, removeProductFromWishlist } = useWishlistData()
	const [btnDisabled, setBtnDisabled] = useState(false);
	const { token } = useAuthData();
	const navigate = useNavigate();

	const {
		id,
		_id,
		title,
		price,
		quantity,
		scale,
		image
	} = product;

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
				? removeProductFromWishlist(_id, token)
				: addProductToWishlist(product, token)
			: navigate('/login');
	};

	return (
		<div key={id} className="border-2  hover:shadow-md hover:shadow-current  flex flex-col py-2 rounded-lg">
			<div className='self-end px-3 '>
				{isInWishlist ? <AiFillHeart className=' text-3xl text-red-500' onClick={wishlistHandler} /> : <AiOutlineHeart className=" text-3xl  " onClick={wishlistHandler} />}
			</div>

			<img
				className="w-full h-auto"
				src={image}
				alt={title}
				onClick={() => navigate(`/product-details/${id}`)}
			/>


			<div className="flex flex-col  gap-2 items-start px-5">


				<h3 className="text-xl  font-semibold" title={title}>
					{title} {quantity} {scale}
				</h3>
				<div className="flex items-center text-lg gap-1">
					<p>3</p>
					<AiFillStar className='text-yellow-500' />
				</div>


				<div className="flex gap-8 font-semibold ">
					<p className="text-lg  ">
						₹ {price}
					</p>
					<p className="text-gray-400 line-through">₹{product.originalPrice}</p>
					<p className="text-green-900  bg-green-100 px-2 py-1 rounded-full ">{product.percentageOff}% OFF</p>
				</div>
				{isInCart ? <button
					className={`border hover:text-indigo-700  text-sky-500 hover:border-indigo-700 flex items-center gap-3  border-sky-500 self-center  px-5 py-1 rounded-full`}
					disabled={
						btnDisabled
					}
					onClick={() => addToCartHandler()}
				>


					<BsCartCheck className="inline text-2xl" /> Go to Cart

				</button> :
					<button
						className={`border text-indigo-700  hover:text-sky-500 hover:border-sky-500 flex items-center gap-3  border-indigo-700 self-center  px-5 py-1 rounded-full`}
						disabled={
							btnDisabled
						}
						onClick={() => addToCartHandler()}
					>

						<AiOutlineShoppingCart className="inline text-2xl" /> Add to Cart

					</button>}
			</div>

		</div>
	);
}
