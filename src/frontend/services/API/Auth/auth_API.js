import axios from 'axios';


export const logInService = async userData => {
	const url = `api/auth/login`;
	const { email, password } = userData;

	return await axios.post('api/auth/login', {
		email,
		password
	});
};

export const signUpService = async userData => {
	const url = `api/auth/signup`;
	return await axios.post(url, { ...userData });
};

export const getProductsService = async () => {
	const url = `api/products`;

	return await axios.get(url);
};
