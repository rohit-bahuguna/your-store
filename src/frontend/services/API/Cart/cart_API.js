import axios from 'axios';

export const addToCart = async (product, token) => {
	return await axios.post(
		'/api/user/cart',
		{
			product
		},
		{
			headers: {
				authorization: token
			}
		}
	);
};

export const removeFromCart = async (id, token) => {
	return await axios.delete(`api/user/cart/${id}`, {
		headers: {
			authorization: token
		}
	});
};

export const clearCart = async (cart, token) => {
	for (const item of cart) {
		await axios.delete(`api/user/cart/${item._id}`, {
			headers: {
				authorization: token
			}
		});
	}
};
export const updateQtyFromCart = async (id, token, actionType) => {
	return await axios.post(
		`/api/user/cart/${id}`,
		{
			action: {
				type: actionType === 'INC_QTY' ? 'increment' : 'decrement'
			}
		},
		{
			headers: {
				authorization: token
			}
		}
	);
};
