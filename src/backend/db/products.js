import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	// Fruits & Vegetables

	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Onion',
		originalPrice: 100,
		price: 30,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'The beauty of an Onion is that it can go just about anywhere. Cut it into thin slices to top off your favourite burger or hot dog, or chop it into little cubes to bring out the sweetness in curry dishes. Chopped Onions are perfect for fish dishes, quiche, stews and chili. Onions can be roasted whole until tender and then chopped, or caramelized by slowly cooking them in butter for a delicious treat for a delicious treat. They are also delicious when dipped in batter and deep-fried!',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/onion.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Tomato',
		originalPrice: 100,
		price: 50,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Fresh, and delicious tomatoes are a summertime favourite. Tomatoes are perfect for sauces and salsas, or try marinating them in herbs and olive oil for an easy appetizer. Enjoy a delicious cup of tomato soup on a lazy afternoon or simply use it as a pizza topping on an exciting evening watching your favourite sports.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/tomato-country.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Potato',
		originalPrice: 250,
		price: 200,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Potato is a root vegetable and the most versatile of all. It is widely used across Indian kitchens paired with numerous other vegetables for preparation of several delicacies. Be it Brinjal, Cauliflower, Tomato, Onion or be it Soyabean Chunks or the Spinach clan- Potatoes goes with all for delicious cuisines.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/potato.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Lauki (Bottle Gourd)',
		originalPrice: 100,
		price: 20,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'The bottle gourd is a vegetable native to India and is cultivated in other Asian countries. Due to its ability to grow almost anywhere, it is an important food source. Bottle Gourd is used in the preparation of various curries in Indian cuisine. The bottle gourds are chopped into pieces and added in curries to savour along with hot rice or rotis. Bottle Gourd is also prepared as chutney to consume with rice, roti or sometimes with dosas.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/lauki-bottle-gourd.avif'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Bhendi (Okra)',
		originalPrice: 100,
		price: 25,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Okra also commonly known as Lady Finger arrives in the pod, for a fun and unique cooking experience. Nosh some raw as a healthy snack, or sautee it lightly for a healthier version of fried Okra. Simply cut the tips of the pods into small pieces to add to soups or stews. Its sticky juice adds thickness, which is ideal for soups and stews alike. Adding a few tablespoons of chopped Okra to a soup or stew will do wonders for a silky, hearty consistency.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/bhendi-okra.avif'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Green Capsicum',
		originalPrice: 100,
		price: 10,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Green Capsicums come in different shapes and sizes to make it easy for you to add vibrant colour and sweet taste wherever you want to. Green Capsicums add a sweet taste and delicious flavour to your favourite dishes. You can cut them into wedges to eat fresh, dice them to mix into dishes, or leave them halved so you can stuff them and bake them. They can be roasted and peeled, stuffed and baked, added to soups and stews, or pickled like pimentos.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/green-capsicum.avif'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Carrot Orange',
		originalPrice: 100,
		price: 60,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Carrots are a great addition to soups and stews, appetizers and , side dishes and salads. They can be roasted in the oven or boiled on the stove top. Try using carrots in place of potato slices in soup, for a lower-carbohydrate meal. They can also be used in place of pasta, in casseroles, and even shredded and added to homemade breads when substituting them for grains is called for.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/carrot-orange.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Cucumber Regular',
		originalPrice: 100,
		price: 30,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Cucumbers are a refreshing, nutritious and incredibly versatile addition to any diet. Cucumbers are high in water content and have a mild and refreshing taste. They offer crispiness, refreshing flavour, and a wonderful texture to salads. You can either slice the Cucumber or spiralize it to make it interesting! You can also enjoy them raw simply with salt or slice them up and dip them in your favourite spreads.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/cucumber-regular.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Beetroot',
		originalPrice: 100,
		price: 80,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Beets are versatile and nutritious root vegetables with vibrant colours. Whether you are looking to add colour to your plate or boost your daily nutritional intake, the deep hues of beets are sure to please your eye and pallet. Whether served as a pickled appetizer, as part of a healthy salad, roasted with other vegetables as a side dish, or as part of a juice cleanse - the possibilities for incorporating Beets into your diet are endless. Add some chopped beets to your next salad or juice .',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/beetroot.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Cauliflower',
		originalPrice: 100,
		price: 42,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Cauliflower can be enjoyed raw or cooked. Raw cauliflower makes a great snack when dipped in hummus or another healthy vegetable dip. Your favourite pasta dish can be quickly upgraded to a healthier alternative with the addition of fresh cauliflower. Cauliflower is also delicious when roasted, steamed, or sauteed with your favourite spices. Try adding some grilled bread slices to the top for even more awesome flavours.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/cauliflower.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Spinach (Paalak) ',
		originalPrice: 100,
		price: 20,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Spinach is a leafy green flowering plants that has its roots in Asia. It is high on Iron and Proteins and promotes hair growth. It is also known to be rich in Vitamins, Folic Acid and Calcium.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'bunch',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/spinach-paalak.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Brinjal Black Big ',
		originalPrice: 100,
		price: 35,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Brinjal is a terrific vegetable to bring into your weekly cooking rotation. The bold flavour of Brinjal makes it a great choice for main dishes, side dishes, salads and even desserts. When grilled, Brinjal has a firm, satisfying texture, making it a popular substitute for meat in vegetarian dishes. Cut it up raw and toss it into every day stir-fries or stick it under the broiler with other vegetables to roast or grill.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'bunch',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/brinjal-black-big.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Coriander',
		originalPrice: 100,
		price: 15,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'If you are into dressing your food well, Coriander must top your grocery list. Coriander not just makes the food look appealing but also adds a distinct flavour to the food. It is widely used for preparation of sides, chutneys and sauces too.',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'bunch',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/coriander-bunch.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Radish White',
		originalPrice: 100,
		price: 65,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Radish needs a little introduction. Radish is a root vegetable which is considered as the ideal health food. It is well known globally for its pungent taste as well as powerful detoxification property. The edible, fleshy, taproot portion of the radish plant is eaten raw, typically sliced into thin rounds and served as a salad. ',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/radish-white.jpg'
	},
	{
		_id: uuid(),
		category: 'Fruits & Vegetables',
		subCategoryName: 'Fresh Vegetables',
		title: 'Cabbage',
		originalPrice: 100,
		price: 40,
		inStock: true,
		soldBy: 'Rohit Bahuguna Retail pvt Ltd',
		description:
			'Cabbage is your secret weapon for any recipe that needs a handful of leafy greens. Use cabbage to add crunch and flavour to your dinner recipes. Break it up and layer on top of pizza. Shred or slice cabbage on your favourite sandwiches, burgers, tacos, and more! Add it to any soup or stew, or throw some into a fresh green salad for added crunch. ',
		Brand: 'Grosers Retail',
		Manufacturer: 'Grosers farms pvt Ltd',
		foodType: 'veg',
		countryOfOrigin: 'India',
		quantity: 1,
		scale: 'kg',
		image: '/images/product/FruitsAndVegetables/FreshVegetables/cabbage.jpg'
	}
];
