import { ACTION_TYPE } from '../utils';

export const initialState = {

    cart: [],
    wishlist: [],

};

export function cartReducer(state, action) {
    const { type, payload } = action;

    switch (type) {

        case ACTION_TYPE.ADD_TO_CART:
            return { ...state, cart: [...payload] };

        case ACTION_TYPE.REMOVE_FROM_CART:

            return { ...state, cart: [...payload] };

        case ACTION_TYPE.UPDATE_QTY_IN_CART:
            return { ...state, cart: [...payload] };
        case ACTION_TYPE.CLEAR_CART:
            return { ...state, cart: [] };

        case ACTION_TYPE.ADD_TO_WISHLIST:
            return { ...state, wishlist: [...payload] };

        case ACTION_TYPE.REMOVE_FROM_WISHLIST:
            return { ...state, wishlist: [...payload] };
        case ACTION_TYPE.LOG_OUT: {

            return {
                cart: [],
                wishlist: {}
            }
        }

        default:
            throw new Error('No ACTION_TYPE matches type' + type);
    }
}
