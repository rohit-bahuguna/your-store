import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    name: "Rohit Bahuguna",
    email: "rohitbahuguna.work@gmail.com",
    password: "iamrohitbahuguna",
    addresses: [
      {
        _id: uuid(),
        houseNumber: 32,
        name: "Bahuguna Niwash",
        street: "Aadrash colony",
        city: "Nainital",
        state: "Uttarakhand",
        country: "India",
        pinCode: "263135"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
