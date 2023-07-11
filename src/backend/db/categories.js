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
			{ _id: uuid(), ischecked: false, subCategoryName: 'Premium Fruits' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Herbs & Seasonings' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Exotic Fruits & Vegetables'
			}
		],
		banner: '/images/category/Fruits-and-Vegetables.jpg'
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
		banner:
			'https://d2pyicwmjx3wii.cloudfront.net/s/60a39f1801d30d79c4caa94b/62e267b05ad1bccc988d7ffe/webp/dairy-and-bakery-1080x529.jpg'
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
			{ _id: uuid(), ischecked: false, subCategoryName: 'Combo Offer' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Sugar & Jaggery' }
		],
		banner: '/images/category/staples.jpg'
	},
	{
		_id: uuid(),
		categoryName: 'Snacks & Branded Foods',
		subCategories: [
			{ _id: uuid(), ischecked: false, subCategoryName: 'Biscuits & Cookies' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Noodle, Pasta, Vermicelli'
			},
			{ _id: uuid(), ischecked: false, subCategoryName: 'Snacks & Namkeen' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Chocolates & Candies'
			},
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Spreads, Sauces, Ketchup'
			},
			{ _id: uuid(), ischecked: false, subCategoryName: 'Pickles & Chutney' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Indian Sweets' }
		],
		banner: '/images/category/snacks.jpeg'
	},
	{
		_id: uuid(),
		categoryName: 'Beverages',
		subCategories: [
			{ _id: uuid(), ischecked: false, subCategoryName: 'Tea' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Coffee, Vermicelli' },
			{ _id: uuid(), ischecked: false, subCategoryName: 'Fruit juices' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Energy & Soft Drinks'
			},
			{ _id: uuid(), ischecked: false, subCategoryName: 'Soda & Water' },
			{
				_id: uuid(),
				ischecked: false,
				subCategoryName: 'Health Drink & Supplement'
			}
		],
		banner:
			'https://5.imimg.com/data5/SELLER/Default/2020/10/NP/NQ/FF/115160227/q-500x500.png'
	}
];
