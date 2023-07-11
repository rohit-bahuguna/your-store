import {
    createContext,
    useContext,
    useReducer,

} from 'react';
import { addToCart, removeFromCart, updateQtyFromCart, clearCart } from "../../services/API/Cart/cart_API"
import { ACTION_TYPE } from '../../utils/constant';
import { initialState, cartReducer } from '../../reducer/CartAndWishlistReducer';

const cartContext = createContext(null);

const useCartData = () => useContext(cartContext);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProductToCart = async (product, token) => {
        const {
            data: { cart },
        } = await addToCart(product, token)
        dispatch({
            type: ACTION_TYPE.ADD_TO_CART,
            payload: cart,
        });
    }

    const removeProductFromCart = async (id, token) => {
        const {
            data: { cart },
        } = await removeFromCart(id, token)
        console.log("removed", cart);
        dispatch({
            type: ACTION_TYPE.REMOVE_FROM_CART,
            payload: cart,
        });
    }

    const clearCartProducts = async (cart, token) => {
        await clearCart(cart, token)
        dispatch({
            type: ACTION_TYPE.CLEAR_CART
        });
    }

    const updateProductQtyFromCart = async (id, token, actionType) => {
        const {
            data: { cart },
        } = await updateQtyFromCart(id, token, actionType)

        dispatch({
            type: ACTION_TYPE.UPDATE_QTY_IN_CART,
            payload: cart,
        });
    }

    return (
        <cartContext.Provider
            value={{ ...state, dispatchCartData: dispatch, addProductToCart, removeProductFromCart, clearCartProducts, updateProductQtyFromCart }}>
            {children}
        </cartContext.Provider>
    );
};

export { useCartData, CartProvider };
