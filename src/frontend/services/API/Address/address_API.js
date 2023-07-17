import axios from 'axios';

export const addAddress = async (address, token) => {

	return await axios.post(
		'api/user/address',
		{
			address
		},
		{
			headers: {
				authorization: token
			}
		}
	);
};
export const removeAddress = async (addressId, token) => {
	return await axios.delete(`api/user/address/${addressId}`, {
		headers: {
			authorization: token
		}
	});
};

export const updateAddress = async (address, token) => {
	return await axios.post(
		`api/user/address/${address._id}`,
		{
			address
		},
		{
			headers: {
				authorization: token
			}
		}
	);
};
