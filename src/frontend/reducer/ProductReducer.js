import { ACTION_TYPE, calcPercentage } from '../utils';

export const initialState = {
	sortBy: '',
	priceRange: 0,
	categories: [],
	sortByRating: '',
	products: [],
	search: '',
	selectedCategory: '',
	selectedSubCategories: [],
	loadingProducts: false
};
export function productReducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.INITIAl_CATEGORIES:
			return {
				...state,
				categories: payload.map(item => {
					return { ...item, showSubCategories: false };
				})
			};

		case ACTION_TYPE.INITIAl_PRODUCTS:

			return {
				...state, products: payload.map(product => ({
					...product,
					percentageOff: calcPercentage(product.price, product.originalPrice)
				}))
			};

		case ACTION_TYPE.PRICE_RANGE:
			return { ...state, priceRange: payload };
		case ACTION_TYPE.SEARCH:
			return { ...state, search: payload };
		case ACTION_TYPE.SORT_BY:
			return { ...state, sortBy: payload };

		case ACTION_TYPE.SORT_BY_RATING:
			return { ...state, sortByRating: payload };

		case ACTION_TYPE.SELECTED_CATEGORY:
			return {
				...state,
				selectedCategory: payload
			};
		case ACTION_TYPE.SELECTED_SUBCATEGORY:
			const { subCategoryName, categoryName, chackedValue } = payload;

			const updatedCategory = state.categories.map(category => {

				if (category.categoryName === categoryName) {

					const filteredSubCategory = category.subCategories.map(
						subCategory => {
							return subCategory.subCategoryName === subCategoryName
								? { ...subCategory, ischecked: chackedValue }
								: subCategory;
						}
					);

					return { ...category, subCategories: filteredSubCategory };

				} else {
					return category;
				}
			});

			return {
				...state,
				selectedSubCategories: !state.selectedSubCategories.includes(
					subCategoryName
				)
					? [...state.selectedSubCategories, subCategoryName]
					: state.selectedSubCategories.filter(
						subCategory => subCategory !== subCategoryName
					),
				categories: updatedCategory
			};


		case ACTION_TYPE.LOG_OUT:
			return { ...state };

		case ACTION_TYPE.CLEAR_FILTER:

			return {
				...state,
				sortBy: '',
				priceRange: 0,
				sortByRating: '',
				search: '',
				selectedCategory: '',
				selectedSubCategories: [],
				categories: state.categories.map(({ subCategories, ...rest }) => {
					const updatedSubCategories = subCategories.map((subCategory) => {
						return { ...subCategory, ischecked: false }
					})
					return { ...rest, subCategories: updatedSubCategories }
				})
			};
		case ACTION_TYPE.SHOW_OR_HIDE_SUBCATEGORIES:
			const { _id, value } = payload;
			return {
				...state,
				categories: state.categories.map(item => {
					return item._id === _id
						? { ...item, showSubCategories: value }
						: item;
				})
			};

		default:
			throw new Error('No ACTION_TYPE matches type' + type);
	}
}
