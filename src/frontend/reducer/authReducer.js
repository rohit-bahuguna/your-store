import { toast } from 'react-hot-toast';
import { ACTION_TYPE } from '../utils';

export const initialState = {
    addresses: [],
    token: JSON.parse(localStorage.getItem("token"))?.token,
    user: { ...JSON.parse(localStorage.getItem("user"))?.user, status: false },

};

export function authReducer(state, action) {
    const { type, payload } = action;

    switch (type) {

        case ACTION_TYPE.INITIAl_ADDRESS:
            return { ...state, addresses: [...payload] };

        case ACTION_TYPE.SET_ADDRESS:
            return { ...state, addresses: payload };
        case ACTION_TYPE.SET_TOKEN:
            return { ...state, token: payload, }
        case ACTION_TYPE.SET_USER: {
            return { ...state, user: payload }
        }
        case ACTION_TYPE.LOG_OUT: {

            localStorage.setItem("token", JSON.stringify({ token: '' }));
            localStorage.setItem("user", JSON.stringify({ user: { status: true } }));

            return {
                ...initialState
            }
        }
        default:
            throw new Error('No ACTION_TYPE matches type' + type);
    }
}
