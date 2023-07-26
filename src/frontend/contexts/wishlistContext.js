import {
    createContext,
    useContext,
    useReducer,

} from 'react';
import { addToWishlist, removeFromWishlist } from "../services/API/Wishlist/wishlist_API"
import { ACTION_TYPE } from '../utils/constant';
import { initialState, cartReducer } from '../reducer/CartAndWishlistReducer';
import toast from 'react-hot-toast';

const wishlistContext = createContext(null);

const useWishlistData = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProductToWishlist = async (product, token) => {
        try {
            const {
                data: { wishlist },
            } = await addToWishlist(product, token)
            dispatch({
                type: ACTION_TYPE.ADD_TO_WISHLIST,
                payload: wishlist,
            });



        } catch (error) {


            toast.error("something went wrong")
        }
    }

    const removeProductFromWishlist = async (id, token) => {
        try {
            const {
                data: { wishlist },
            } = await removeFromWishlist(id, token)
            dispatch({
                type: ACTION_TYPE.REMOVE_FROM_WISHLIST,
                payload: wishlist,
            });

        } catch (error) {


            toast.error("something went wrong")
        }
    }



    return (
        <wishlistContext.Provider
            value={{ ...state, dispatchWishlistData: dispatch, addProductToWishlist, removeProductFromWishlist }}>
            {children}
        </wishlistContext.Provider>
    );
};

export { useWishlistData, WishlistProvider };
