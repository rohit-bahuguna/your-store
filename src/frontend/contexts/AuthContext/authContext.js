import axios from 'axios';
import {
	createContext,
	useContext,
	useState,
	useEffect,
	useReducer
} from 'react';
import { logInService, signUpService } from '../../services/API/Auth/auth_API';
import { ACTION_TYPE } from '../../utils';
import { authReducer, initialState } from '../../reducer/authReducer';
import {
	addAddress,
	removeAddress,
	updateAddress
} from '../../services/API/Address/address_API';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const loginUser = async userData => {
		if (userData) {
			try {
				const { data: { foundUser, encodedToken } } = await logInService(
					userData
				);

				localStorage.setItem('login', JSON.stringify({ token: encodedToken }));
				localStorage.setItem(
					'user',
					JSON.stringify({ user: { ...foundUser, status: true } })
				);

				dispatch({
					type: ACTION_TYPE.SET_TOKEN,
					payload: encodedToken
				});
				dispatch({
					type: ACTION_TYPE.SET_USER,
					payload: { ...foundUser, status: true }
				});

				dispatch({
					type: ACTION_TYPE.INITIAl_ADDRESS,
					payload: foundUser.addresses
				});
			} catch (error) {
				console.log('Error in login user', error);
			}
		}
	};

	const signUpUser = async userData => {
		try {
			const {
				data: { createdUser, encodedToken },
				status
			} = await signUpService(userData);
			if (status === 201) {
				localStorage.setItem('signup', JSON.stringify({ token: encodedToken }));
				localStorage.setItem(
					'user',
					JSON.stringify({ user: { ...createdUser, status: true } })
				);

				dispatch({
					type: ACTION_TYPE.SET_TOKEN,
					payload: encodedToken
				});
				dispatch({
					type: ACTION_TYPE.SET_USER,
					payload: { ...createdUser, status: true }
				});
			}
		} catch (error) {
			console.log('Error in login user', error);
		}
	};

	const addUsersAddress = async address => {
		try {
			const { data } = await addAddress(address, state.token);
			dispatch({
				type: ACTION_TYPE.SET_ADDRESS,
				payload: data.addresses
			});
		} catch (error) {
			console.log(error);
		}
	};
	const removeUsersAddress = async addressId => {
		try {
			const { data } = await removeAddress(addressId, state.token);
			dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: data.addresses });
		} catch (error) {
			console.log(error);
		}
	};

	const updateUsersAddress = async address => {
		try {
			const { data } = await updateAddress(address, state.token);
			dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: data.addresses });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				loginUser,
				signUpUser,
				dispatchAuthData: dispatch,
				addUsersAddress,
				removeUsersAddress,
				updateUsersAddress
			}}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuthData = () => useContext(AuthContext);

export { useAuthData, AuthProvider };
