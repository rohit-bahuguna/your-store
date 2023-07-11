import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useOrderData } from "../../contexts/orderContext";
import { toast } from "react-toastify";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { ACTION_TYPE } from "../../utils";

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
    <div className="checkout-details">
      <h4 className="text-center border-header">ORDER DETAILS</h4>
      <div>

        <ul className="order-header">
          <p>Item</p>
          <p>Qty</p>
        </ul>


        {cart.map(({ _id, title, scale, qty }) => (
          <ul key={_id}>
            <p>{title}</p>
            <p>{qty} {scale}</p>
          </ul>
        ))}

      </div>
      <h4 className="text-center border-header">PRICE DETAILS</h4>

      <div className="checkout-calculate">

        <ul>
          <p>Price ({cart.length} items)</p>
          <p>₹ {price}</p>
        </ul>
        <ul>
          <p>Discount</p>
          <p>₹ {discount}</p>
        </ul>
        <ul>
          <p>Delivery Charges</p>
          <p>FREE</p>
        </ul>

        <ul>
          <p>Coupon Discount</p>
          <p>
            {coupon !== 0 && "-"}₹ {coupon}
          </p>
        </ul>
        {coupon !== 0 && (
          <ul className="coupon-msg">
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/726/726448.png" />
              {couponValue.couponName}
            </p>
          </ul>
        )}

      </div>

      <ul>
        <h4>Total Amount</h4>
        <h4>₹ {totalAmt}</h4>
      </ul>

      <h4 className="text-center border-header">DELIVER TO</h4>
      {orderAddress.name && (
        <div className="deliver-container ">
          <div>
            <p className="paragraph-md ">
              {orderAddress.houseNumber} ,
              {orderAddress.name}</p>
            <p className="paragraph-sm">
              {orderAddress.street}, {orderAddress.city} , {orderAddress.state} ,
              {orderAddress.country}. {orderAddress.pinCode}
            </p>

          </div>
        </div>
      )}
      <div className="primary-btn text-center" onClick={() => placeOrderHandler()}>
        <button className="link-btn place-order-btn">Place Order</button>
      </div>
    </div>
  );
}
