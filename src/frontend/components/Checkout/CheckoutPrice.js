import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useOrderData } from "../../contexts/orderContext";
import { toast } from "react-toastify";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { ACTION_TYPE } from "../../utils";
import { CartPrice } from "../Cart/CartPrice";

export function CheckoutPrice({ setMsg }) {
  const navigate = useNavigate();
  const { cart, dispatchCartData, clearCartProducts } = useCartData();
  const { couponValue, priceDetails, orderAddress, dispatch, order, setOrder } = useOrderData();
  const {
    user: { name, email },
    token,
    addresses
  } = useAuthData();
  const { price, discount, coupon, totalAmt } = priceDetails;

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_njYPlixIkB2ukb",
      amount: totalAmt * 100,
      currency: "INR",
      name: "Grosers",
      description: "Thank you for shopping with us",
      image: "https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true",
      handler: function (response) {
        const orderData = {
          products: [...cart],
          amount: totalAmt,
          paymentId: response.razorpay_payment_id,
          delivery: orderAddress,
        };
        setOrder({ ...orderData });
        clearCartProducts(cart, token);
        dispatch({ type: ACTION_TYPE.RESET_PRICE });
        setMsg(true);
      },
      prefill: {
        name,
        email: email,
        contact: "8865894446",
      },
      theme: {
        color: "#232f3e",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    if (addresses.length === 0) {
      toast.error("Please Add Address");
      setTimeout(() => {
        navigate("/user-profile#user-address");
      }, 1500);
    } else {
      !orderAddress.name ? toast.error("Please Select Address") : displayRazorpay();
    }
  };
  return (
    <div className="border rounded-xl flex flex-col gap-5 justify-center py-3 px-2 w-1/3">
      <h4 className="text-lg font-semibold self-center">ORDER DETAILS</h4>

      <table className=" ">
        <thead>
          <tr>
            <th className="border-y border-gray-400">Item</th>
            <th className="border-y border-l border-gray-400">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ _id, title, scale, qty }) => (
            <tr key={_id}>
              <td className="border-y py-1 text-center">{title}</td>
              <td className="border-y py-1 border-l text-center">{qty} {scale}</td>
            </tr>
        ))}
        </tbody>
      </table>
      <h4 className="text-lg font-semibold self-center" >PRICE DETAILS</h4>
      <div>


        <div className="border-b-2 pb-1 list-none flex flex-col gap-4 w-full px-5 text-lg">

          <div className="flex justify-between ">
            <p>Price ({cart.length} items)</p>
            <p>₹ {price}</p>
          </div>
          <div className="flex justify-between ">
            <p>Discount</p>
            <p className="text-green-600">-₹ {discount}</p>
          </div>
          <div className="flex justify-between ">
            <p>Delivery Charges</p>
            <p className="text-green-600">FREE</p>
          </div>
          <div className="flex justify-between ">
            <p>Coupon Discount</p>
            <p className="text-green-600">
              {coupon !== 0 && "-"}₹ {coupon.toFixed(2)}
            </p>
          </div>


          <div className="flex justify-between">
            <h4>Total Amount</h4>
            <h4 className="font-semibold">₹ {totalAmt}</h4>
          </div>

      </div>
      </div>



      <h4 className="text-lg font-semibold self-center">DELIVER TO</h4>
      {orderAddress.name && (
        <div className="px-3">

            <p className="paragraph-md ">
              {orderAddress.houseNumber} ,
              {orderAddress.name}</p>
            <p className="paragraph-sm">
            {orderAddress.street}, {orderAddress.city} ,
            {orderAddress.state} ,
            {orderAddress.country}. {orderAddress.pinCode}
            </p>


        </div>
      )}
      <div className="text-center" onClick={() => placeOrderHandler()}>
        <button className="border px-5 py-1 text-indigo-700 hover:bg-indigo-100 border-indigo-700 rounded-full text-lg">Place Order</button>
      </div>
    </div>
  );
}
