
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdLogout } from "react-icons/md"
import { BiSearch } from 'react-icons/bi';
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiChevronDown } from 'react-icons/bi';
import { useCartData } from "../../contexts/cartContext/cartContext"
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { useProductData } from '../../contexts/productContext/productContext';
import { ACTION_TYPE } from '../../utils';
import { useWishlistData } from '../../contexts/wishlistContext';
import Logo from './Logo';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { toast } from 'react-hot-toast';
import SearchBar from './SearchBar';

export const Header = ({ setShowSearch }) => {
  const { cart } = useCartData()
  const { wishlist } = useWishlistData()
  const { dispatchProductData } = useProductData()
  const { user, dispatchAuthData, addresses } = useAuthData()
  const [showModal, setShowModal] = useState(false)


  const userLogout = () => {

    dispatchProductData({
      type: ACTION_TYPE.LOG_OUT
    })

    dispatchAuthData({
      type: ACTION_TYPE.LOG_OUT
    })
    toast.success("Logout Successfully")

  }



  const modalRef = useRef()
  useOutsideClick(modalRef, () => setShowModal(false))





  return (
    <nav className="flex border-b px-1 w-full h-[10vh] shadow  sm:gap-20 sm:justify-evenly justify-between items-center sticky top-0 bg-white z-10">

      {/* Logo */}
      <div className='flex gap-10     '>
        <Logo />

        {/* Address */}
        <div className='hidden sm:block'>
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

      {/* search */}

      <div className='hidden sm:block w-[30%]  '>
        <SearchBar />
      </div>

      {/* user name */}
      <div className='flex items-center gap-10  '>
        {user.status &&

          <Link to="/user-profile">
            <p className='mt-1 md:flex hidden items-center hover:text-sky-600'>
              <span className='first-letter:uppercase '>{user?.name.split(' ')[0]}</span> <BiChevronDown className='inline text-2xl' />
            </p>
          </Link>
        }

        {/* wishlist cart login botton */}

        <div className='flex   relative items-center gap-3 md:gap-8 py-3 '>
          <BiSearch className=' md:hidden  text-3xl hover:text-sky-500 ' onClick={() => setShowSearch(true)} />

          <Link to="/wishlist" className=''>
            <AiOutlineHeart className='text-3xl hover:text-sky-500 ' />

            {
              wishlist.length > 0 && <div className='text-white  absolute top-0 right-20 md:left-5  bg-sky-500 text-lg rounded-full text-center md:w-8 md:h-7 w-6 h-6 m-1  '>{wishlist.length}</div>
            }

          </Link>


          <Link to="/cart">
            <AiOutlineShoppingCart className='text-3xl hover:text-sky-500 ' />

            {
              cart.length > 0 && <div className='text-white  absolute top-0 left-24 md:left-20 m-1  bg-sky-500 text-lg rounded-full text-center md:w-8 md:h-7 w-6 h-6'>{cart.length}</div>
            }

          </Link>

          {user.status ? <div>
            <button className='btnRed hidden md:block relative' onClick={userLogout}
            >Logout</button>
            <GiHamburgerMenu className='md:hidden text-3xl mr-2 hover:text-indigo-700 ' onClick={() => setShowModal(true)} />
            {
              showModal && <div className='md:hidden rounded-xl absolute right-2  bg-white  border py-1 text-lg'
                ref={modalRef}
              >
                <Link to="/user-profile">
                  <p className=' px-5 py-1 hover:bg-indigo-100 hover:text-indigo-700 flex items-center gap-2'>
                    <CgProfile className='inline text-2xl' />
                    Profile</p>
                </Link>
                <p className=' px-5 py-1 hover:bg-indigo-100 hover:text-indigo-700 flex items-center gap-2'
                  onClick={userLogout}
                >
                  <MdLogout className='inline text-2xl' />
                  Logout</p>
              </div>
            }
          </div> : <Link to="/login"><button className='btnIndigo'>Login</button></Link>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
