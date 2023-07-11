import { ACTION_TYPE } from '../utils';

export const initialState = {
    addresses: [],
    token: JSON.parse(localStorage.getItem("login"))?.token,
    user: { ...JSON.parse(localStorage.getItem("user"))?.user, status: false },

};

export function authReducer(state, action) {
    const { type, payload } = action;
    switch (type) {

        case ACTION_TYPE.INITIAl_ADDRESS:
            return { ...state, addresses: [...payload] };

        case ACTION_TYPE.SET_ADDRESS:
            return { ...state, addresses: [...state.addresses, payload] };
        case ACTION_TYPE.SET_TOKEN:
            return { ...state, token: payload, }
        case ACTION_TYPE.SET_USER: {
            return { ...state, user: payload }
        }
        case ACTION_TYPE.LOG_OUT: {
            localStorage.setItem("login", JSON.stringify({ token: '' }));
            localStorage.setItem("user", JSON.stringify({ user: { status: true } }));
            localStorage.setItem("signup", JSON.stringify({ token: '' }));

            return {
                ...initialState
            }
        }
        default:
            throw new Error('No ACTION_TYPE matches type' + type);
    }
}
