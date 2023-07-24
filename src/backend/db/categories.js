import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: 'Fruits & Vegetables',
		subCategories: [
			{ _id: uuid(), ischecked: false , subCategoryName: 'Fresh Vegetables' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Fresh Fruits' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Herbs & Seasonings' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Exotic Fruits & Vegetables'
			}
		],
		mainBanner: "/images/categoryBanners/fruits-vegetables.avif",
		banner: '/images/category/Fruits-and-Vegetables.jpg',

	},
	{
		_id: uuid(),
		categoryName: 'Dairy & Bakery',
		subCategories: [
			{ _id: uuid(), ischecked: false, subCategoryName: 'Dairy' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Toast & Khari' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Breads and Buns' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Cakes & Muffins' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Paneer & Tofu' }
		],
		mainBanner: "/images/categoryBanners/dairy-bakery.avif",
		banner:
			'/images/category/dairy-and-bakery.jpg'
	},
	{
		_id: uuid(),
		categoryName: 'Staples',
		subCategories: [
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Atta, Flours & Sooji'
			},
			{ _id: uuid(), ischecked: false, subCategoryName: 'Dals & Pulses' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Rice & Rice Products'
			},
			{ _id: uuid(), ischecked: false, subCategoryName: 'Oils & Ghee' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Masalas & Spices' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Salt, Sugar & Jaggery' }
		],
		mainBanner: "/images/categoryBanners/staples.avif",
		banner: '/images/category/staples.jpg'
	},
	{ 
		_id: uuid(),
		categoryName: 'Beverages',
		subCategories: [
			{ _id: uuid(), ischecked: false, subCategoryName: 'Tea' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Coffee' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Fruit Juices' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Energy & Soft Drinks'
			}

		],
		mainBanner: "/images/categoryBanners/beverages.avif",
		banner:
			'/images/category/Beverages.jpg'
	},
	// {
	// 	_id: uuid(),
	// 	categoryName: 'Snacks & Branded Foods',
	// 	subCategories: [
	// 		{ _id: uuid(), ischecked: false, subCategoryName: 'Biscuits & Cookies' },
	// 		{
	// 			_id: uuid(),
	// 			ischecked: false,
	// 			subCategoryName: 'Noodle, Pasta, Vermicelli'
	// 		},
	// 		{ _id: uuid(), ischecked: false, subCategoryName: 'Snacks & Namkeen' },
	// 		{
	// 			_id: uuid(),
	// 			ischecked: false,
	// 			subCategoryName: 'Chocolates & Candies'
	// 		},
	// 		{
	// 			_id: uuid(),
	// 			ischecked: false,
	// 			subCategoryName: 'Spreads, Sauces, Ketchup'
	// 		},
	// 		{ _id: uuid(), ischecked: false, subCategoryName: 'Pickles & Chutney' },
	// 		{ _id: uuid(), ischecked: false, subCategoryName: 'Indian Sweets' }
	// 	],
	// 	banner: '/images/category/snacks.jpeg'
	// }

];
