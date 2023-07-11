const calcPercentage = (price, originalPrice) =>
  Math.floor(Math.abs((price / originalPrice) * 100 - 100));

const isProductInWishlist = (wishlist, id) =>
  wishlist?.find((wishlistProduct) => wishlistProduct.id === id);

const isProductInCart = (cart, id) =>
  cart?.find((cartProduct) => cartProduct.id === id);

export { calcPercentage, isProductInWishlist, isProductInCart };
