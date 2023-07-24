import axios from "axios";


export async function addToWishlist(product, token) {

  return await axios.post(
    "/api/user/wishlist",
    {
      product,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

}

export async function removeFromWishlist(productId, token) {
  return await axios.delete(`api/user/wishlist/${productId}`, {
    headers: {
      authorization: token,
    },
  });

}
