import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState
} from 'react';
import {
	GetAllCategories,
	GetAllProducts
} from '../../services/API/Product/product_API';
import { ACTION_TYPE } from '../../utils/constant';
import { initialState, productReducer } from '../../reducer/ProductReducer';
const productContext = createContext(null);

const useProductData = () => useContext(productContext);
const changeTitle = title => (document.title = `${title} - Your Store`);
const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialState);

	const suffledProducts = state.products.sort(() => Math.random() - 0.5) 



	useEffect(() => {
		(async () => {
			try {
				const { data: { products } } = await GetAllProducts();
				dispatch({
					type: ACTION_TYPE.INITIAl_PRODUCTS,
					payload: products
				});
			} catch (error) {
				console.error(error.message);
			}
		})();

		(async () => {
			try {
				const { data: { categories } } = await GetAllCategories();

				dispatch({
					type: ACTION_TYPE.INITIAl_CATEGORIES,
					payload: categories
				});
			} catch (error) {
				console.error(error.message);
			}
		})();
	}, []);
	return (
		<productContext.Provider
			value={{ ...state, products: suffledProducts, dispatchProductData: dispatch, changeTitle }}>
			{children}
		</productContext.Provider>
	);
};

export { useProductData, ProductProvider };
