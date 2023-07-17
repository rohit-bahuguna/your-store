import {
	createContext,
	useContext,
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
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const loginUser = async userData => {
		if (userData) {
			try {
				const { data: { foundUser, encodedToken } } = await logInService(
					userData
				);

				localStorage.setItem('token', JSON.stringify({ token: encodedToken }));
				localStorage.setItem(
					'user',
					JSON.stringify({ user: { ...foundUser, status: true } })
				);
				toast.success(`Welcome Back ${foundUser.name}`)
				dispatch({
					type: ACTION_TYPE.SET_TOKEN,
					payload: encodedToken
				});
				dispatch({
					type: ACTION_TYPE.SET_USER,
					payload: { ...foundUser, status: true }
				});


				if (foundUser.addresses) {
					dispatch({
						type: ACTION_TYPE.INITIAl_ADDRESS,
						payload: foundUser.addresses
					});

				}


			} catch (error) {
				toast.error(error.response.data.error)
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
				localStorage.setItem('token', JSON.stringify({ token: encodedToken }));
				localStorage.setItem(
					'user',
					JSON.stringify({ user: { ...createdUser, status: true } })
				);
				toast.success(`Welcome ${createdUser.name}`)
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
			toast.error(error.response.data.error)
		}
	};

	const addUsersAddress = async address => {
		try {
			console.log(state.token)
			const { data } = await addAddress(address, state.token);
			dispatch({
				type: ACTION_TYPE.SET_ADDRESS,
				payload: data.addresses
			});
		} catch (error) {
			toast.error(error.response.data.error)
		}
	};
	const removeUsersAddress = async addressId => {
		try {
			const { data } = await removeAddress(addressId, state.token);
			dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: data.addresses });
		} catch (error) {
			toast.error(error.response.data.error)
		}
	};

	const updateUsersAddress = async address => {
		try {
			const { data } = await updateAddress(address, state.token);
			dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: data.addresses });
		} catch (error) {
			toast.error(error.response.data.error)
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
