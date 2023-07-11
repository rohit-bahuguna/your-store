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

export async function removeFromWishlist(id, token) {
  return await axios.delete(`api/user/wishlist/${id}`, {
    headers: {
      authorization: token,
    },
  });

}
