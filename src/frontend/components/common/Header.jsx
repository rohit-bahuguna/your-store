
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { useCartData } from "../../contexts/cartContext/cartContext"
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { useProductData } from '../../contexts/productContext/productContext';
import { ACTION_TYPE } from '../../utils';
import { useWishlistData } from '../../contexts/wishlistContext';
import Logo from './Logo';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { toast } from 'react-hot-toast';

export const Header = () => {
  const { cart } = useCartData()
  const { wishlist } = useWishlistData()
  const { dispatchProductData, products } = useProductData()
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const { user, dispatchAuthData, addresses } = useAuthData()
  const navigate = useNavigate();
  const [showSearchOutputModal, setShowOutputModal] = useState(false);

  const searchProducts = () => {
    setShowOutputModal(true)
    const searchedProduct = products.filter(({ title }) => title.toLowerCase().includes(searchInput.toLowerCase()))
    setSearchData(searchedProduct)

  }

  const resetSearch = () => {
    setSearchInput('')
    setShowOutputModal(false)
  }

  const modalRef = useRef()
  useOutsideClick(modalRef, resetSearch)


  useEffect(() => {
    if (searchInput) {
      searchProducts()
    } else {
      setSearchData([])
    }

  }, [searchInput]);


  return (
    <nav className="flex border-b w-full h-[10vh] shadow  gap-20 justify-evenly items-center sticky top-0 bg-white z-10">

      {/* Logo */}
      <div className='flex gap-10     '>
        <Logo />

        {/* Address */}
        <div className=''>
          <p className='ml-1'> Deliver to</p>


          <div>
            {
              addresses.length > 0 ? <p className='flex  items-center gap-2'>
                <CiLocationOn /> {addresses[0]?.street} ,  {addresses[0]?.city} </p> : <p className='flex  items-center gap-2'>
                <CiLocationOn className='' /> <span>Select your address</span>
              </p>
            }
          </div>

        </div>
      </div>

      <div className='w-[30%] relative '>
        <input type="text" className='px-2 py-2 border w-full rounded text-lg' placeholder='Search Here' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
        {showSearchOutputModal &&
          <div className='flex max-h-[50vh] overflow-y-scroll flex-col gap-3 bg-white absolute w-full rounded-b-xl border-x border-b px-2   py-2  ' ref={modalRef}>
            {searchData.length === 0 ? (
              <p className='text-center text-lg'>No item to show</p>
            ) : (
                searchData.map(({ id, title, price, image }) => {
                return (
                  <div
                    onClick={() => {
                      setShowOutputModal(false)
                      setSearchInput('')
                      navigate(`/product-details/${id}`, { replace: true })
                    }}
                    className='flex justify-between items-center px-2 py-1 changeColorOnHover rounded border'
                  >
                    <img
                      className='w-10 h-auto filter mix-blend-multiply   '
                      src={image}
                      alt='nav search img'
                    />
                    <div className='  w-[80%] flex justify-between px-5'>

                      <p className='text-lg font-wt-semibold'>{title}</p>

                      <p className='font-wt-md'>₹ {price}</p>

                    </div>
                  </div>
                );
              })
            )}
          </div>
        }
      </div>

      <div className='flex items-center gap-10  '>
        {user.status &&

          <Link to="/user-profile">
            <p className='mt-1 flex items-center hover:text-sky-600'>
              <span className='first-letter:uppercase '>{user?.name.split(' ')[0]}</span> <BiChevronDown className='inline text-2xl' />
            </p>
          </Link>
        }

        <div className='flex   relative items-center gap-10 py-3 '>


          <Link to="/wishlist">
            <AiOutlineHeart className='text-3xl hover:text-sky-500 ' />

            {
              wishlist.length > 0 && <div className='text-white  absolute top-2 left-5  bg-sky-500 text-lg rounded-full text-center w-8 h-7 m-1  '>{wishlist.length}</div>
            }

          </Link>


          <Link to="/cart">
            <AiOutlineShoppingCart className='text-3xl hover:text-sky-500 ' />

            {
              cart.length > 0 && <div className='text-white  absolute top-2 left-20 m-1  bg-sky-500 text-lg rounded-full text-center w-8 h-7 '>{cart.length}</div>
            }

          </Link>

          {user.status ? <button className='btnRed' onClick={() => {
            dispatchProductData({
              type: ACTION_TYPE.LOG_OUT
            })

            dispatchAuthData({
              type: ACTION_TYPE.LOG_OUT
            })
            toast.success("Logout Successfully")
          }}

          >Logout</button> : <Link to="/login"><button className='btnIndigo'>Login</button></Link>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
