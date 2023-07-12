
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useAuthData } from '../../contexts/auth-context';
// import { useData } from '../../contexts/data-context';
// import { ActionType, Filters } from '../../DataReducer/constants';
import { useEffect, useState, useRef } from 'react';
import { CiLocationOn } from "react-icons/ci"
// import { searchFilter } from '../../utils/utils';
// import { useOutsideClickHandler } from '../../Hooks/outsideClickHandler';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { useCartData } from "../../contexts/cartContext/cartContext"
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { useProductData } from '../../contexts/productContext/productContext';
import { ACTION_TYPE } from '../../utils';
import { useWishlistData } from '../../contexts/wishlistContext';
import Logo from './Logo';
export const Header = () => {
  const location = useLocation();
  const { cart } = useCartData()
  const { wishlist } = useWishlistData()
  const { dispatchProductData } = useProductData()
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const { user, dispatchAuthData, addresses } = useAuthData()
  const navigate = useNavigate();
  const [showSearchOutputModal, setShowOutputModal] = useState(false);
  let timer = useRef();



  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dispatchProductData({
        type: ACTION_TYPE.SEARCH,
        payload: searchInput,
      });
      // setLoader(true);
      // setTimeout(() => setLoader(false), 500);
      if (searchInput.trim().length > 0) {
        navigate("/products");
      }
    }, 1000);
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

      <div className='w-[30%]'>
        <input type="text" className='px-2 py-2 border w-full rounded text-lg' placeholder='Search Here' onChange={(e) => setSearchInput(e.target.value)
        } value={searchInput} />
        {showSearchOutputModal ? (
          <div className='nav-search-output-container '>
            {searchData.length === 0 ? (
              <p className='text-align-center'>No item to show</p>
            ) : (
              searchData.map((el) => {
                return (
                  <div
                    onClick={() => navigate(`product/${el._id}`)}
                    className='nav-search-output-item'
                  >
                    <img
                      className='nav-output-smaller-img'
                      src={el.image}
                      alt='nav search img'
                    />
                    <div className='nav-search-output-item-details'>
                      <div className='nav-search-output-item-upper nav-search-output-item-upper-smaller'>
                        <p className='text-lg font-wt-semibold'>{el.title}</p>

                        <p className='font-wt-md'>₹ {el.price}</p>
                      </div>
                      <div className='nav-search-output-item-desc'></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : null}
      </div>

      <div className='flex items-center gap-10  '>
        {user.status && 

          <Link to="/user-profile">
            <p className='mt-1 flex items-center hover:text-sky-600'>
              <span className='first-letter:uppercase '>{user?.name.split(' ')[0]}</span> <BiChevronDown className='inline text-2xl' />
            </p>
          </Link>
        }

        <div className='flex   relative items-center gap-8 py-3 '>

          <div className=' '>
            <Link to="/wishlist">
              <AiOutlineHeart className='text-3xl hover:text-sky-500 ' />
            </Link>
            {
              wishlist.length > 0 && <div className='text-white  absolute top-2 left-5 bg-black hover:bg-sky-500 text-lg rounded-full text-center w-8 h-7 m-1  '>{wishlist.length}</div>
            }
          </div>


          <div className=''>
            <Link to="/cart">
              <AiOutlineShoppingCart className='text-3xl hover:text-sky-500 ' />
            </Link>
            {
              cart.length > 0 && <div className='text-white  absolute top-2 left-20 m-1 bg-black hover:bg-sky-500 text-lg rounded-full text-center w-8 h-7 '>{cart.length}</div>
            }

          </div>

          {user.status ? <button className='text-xl border shadow px-5 py-1 rounded-full   hover:bg-sky-500' onClick={() => {
            dispatchProductData({
              type: ACTION_TYPE.LOG_OUT
            })

            dispatchAuthData({
              type: ACTION_TYPE.LOG_OUT
            })

          }}

          >Logout</button> : <Link to="/login"><button className='text-xl border shadow px-5 py-1 rounded-full   hover:bg-sky-500'>Login</button></Link>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
