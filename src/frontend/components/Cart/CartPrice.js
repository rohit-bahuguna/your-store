import React from "react";
import { useNavigate } from "react-router-dom";

import { useOrderData } from "../../contexts/orderContext";
import { ACTION_TYPE, getPriceDetails } from "../../utils";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useCartData } from "../../contexts/cartContext/cartContext";

export function CartPrice({ setCouponModal }) {
  const navigate = useNavigate();
  const { addresses } = useAuthData();
  const { cart } = useCartData()
  const { couponValue, setCouponValue, dispatch } = useOrderData();

  const { price, discount } = getPriceDetails(cart);
  const coupon = price
    ? Math.abs((parseFloat(price - discount) / 100) * parseFloat(couponValue.value))
    : 0;
  const totalAmt = parseFloat(price - discount - coupon).toFixed(2);
  const totalDiscount = parseFloat(discount + coupon).toFixed(2);

  const checkoutHandler = () => {
    dispatch({
      type: ACTION_TYPE.PRICE_DETAILS,
      payload: { price, discount, coupon, totalAmt, totalDiscount },
    });
    dispatch({
      type: ACTION_TYPE.ORDER_ADDRESS,
      payload: addresses[0],
    });
    navigate("/checkout");
  };

  return (
    <div className="price-details">
      <ul className="coupon">
        <p>
          <i className="fa fa-tag" aria-hidden="true"></i> Have A Coupon ?
        </p>
        <div className="btn outlined-default coupon-btn" onClick={() => setCouponModal(true)}>
          Apply
        </div>
      </ul>
      <h4 >PRICE DETAILS</h4>

      <div className="price-calculate">
        <li>
          <ul>
            <p>Price ({cart.length} items)</p>
            <p>₹ {price}</p>
          </ul>
          <ul>
            <p>Discount</p>
            <p>-₹ {discount}</p>
          </ul>
          <ul>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </ul>
          <ul>
            <p>Coupon Discount</p>
            <p>
              {coupon !== 0 && "-"}₹ {coupon.toFixed(2)}
            </p>
          </ul>
          {coupon !== 0 && (
            <ul className="coupon-msg">
              <p>
                <img src="https://cdn-icons-png.flaticon.com/512/726/726448.png" />
                {couponValue.couponName}
              </p>
              <p
                className="remove-coupon"
                onClick={() => setCouponValue({ couponName: "", value: 0 })}
              >
                ❌
              </p>
            </ul>
          )}
        </li>
      </div>
      <ul className="price-totalAmt">
        <h4>Total Amount</h4>
        <h4>₹ {totalAmt}</h4>
      </ul>
      {totalDiscount > 0 && <p className="save-msg">You will save ₹ {totalDiscount} on this order</p>}
      <div className="primary-btn text-center" onClick={() => checkoutHandler()}>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
