import { useNavigate } from 'react-router';
import {
	isProductInCart,
	isProductInWishlist
} from '../../utils/cartUtils';
import { BsCartCheck } from "react-icons/bs"
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai';
import { useCartData } from '../../contexts/cartContext/cartContext';
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { useWishlistData } from '../../contexts/wishlistContext';
import toast from 'react-hot-toast';

export function ProductCard({ product }) {
	const { cart, addProductToCart } = useCartData();
	const { wishlist, addProductToWishlist, removeProductFromWishlist } = useWishlistData()
	const { token } = useAuthData();
	const navigate = useNavigate();

	const {
		id,
		_id,
		title,
		price,
		quantity,
		scale,
		image,
		rating
	} = product;

	const isInCart = isProductInCart(cart, id);
	const isInWishlist = isProductInWishlist(wishlist, id);

	const addToCartHandler = () => {
		token
			? isInCart
				? navigate('/cart')
				: addProductToCart(product, token)
			: navigate('/login');

		toast.success('Added To Cart')
	};

	const wishlistHandler = () => {
		token
			? isInWishlist
				?
				removeProductFromWishlist(_id, token)
				: addProductToWishlist(product, token)
			: navigate('/login');


		isInWishlist ? toast.success('Removed From Wishlist') : toast.success('Added To Wishlist')

	};

	return (
		<div key={id} className="border-2 h-full gap-3   hover:shadow-md hover:shadow-current  flex flex-col py-2 rounded-lg">
			<div className='flex flex-col '>
				<div className='self-end px-3 '>
					{isInWishlist ? <AiFillHeart className=' text-3xl text-red-500' onClick={wishlistHandler} /> : <AiOutlineHeart className=" text-3xl  " onClick={wishlistHandler} />}
				</div>

				<img
					className="w-44 h-44 object-cover self-center  hover:cursor-pointer"
					loading="lazy"
					src={image}
					alt={title}
					onClick={() => navigate(`/product-details/${id}`)}
				/>
			</div>


			<div className="flex flex-col h-1/2 justify-around gap-2 items-start md:px-5 px-1">


				<h3 className="md:text-lg   font-semibold" title={title}>
					{title} {quantity} {scale}
				</h3>
				<div className="flex items-center text-lg gap-1">
					<p>{rating}</p>
					<AiFillStar className='text-yellow-500' />
				</div>


				<div className="flex md:gap-8 gap-2  md:text-lg text-sm items-center font-semibold flex-wrap ">
					<p className="">
						₹ {price}
					</p>
					<p className="text-gray-400 line-through">₹{product.originalPrice}</p>
					<p className="text-green-900  bg-green-100 px-2  py-1 rounded-full ">{product.percentageOff}% off</p>
				</div>
				{isInCart ? <button
					className="btnIndigo bg-indigo-200 self-center flex items-center gap-2"

					onClick={() => addToCartHandler()}
				>


					<BsCartCheck className="md:inline hidden text-2xl" /> Go to Cart

				</button> :
					<button
						className={`btnIndigo  self-center flex items-center gap-2`}

						onClick={() => addToCartHandler()}
					>

						<AiOutlineShoppingCart className="md:inline text-2xl hidden " /> Add to Cart

					</button>}
			</div>

		</div>
	);
}
