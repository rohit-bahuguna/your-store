import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { useOrderData } from "../../contexts/orderContext";
import { ACTION_TYPE, getPriceDetails } from "../../utils";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { CouponModal } from "./CouponModal";

export function CartPrice() {
  const navigate = useNavigate();
  const { addresses } = useAuthData();
  const { cart } = useCartData()
  const { couponValue, setCouponValue, dispatch } = useOrderData();
  const [couponModal, setCouponModal] = useState(false);

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
    <div className="   flex flex-col gap-3 pt-3 items-center ">
      <div className="flex gap-12 items-center ">
        
        <p>
          <BiSolidOffer className="text-3xl text-green-600 inline mr-2"/> Have A Coupon ?
          </p>
        
        <button className="border px-5 py-1 text-indigo-700 hover:bg-indigo-100 border-indigo-700 rounded-full text-lg" onClick={() => setCouponModal(true)}>
          Apply
        </button>
      </div>
      <h4 className="text-lg font-semibold" >PRICE DETAILS</h4>

      <div className="border-b-2 pb-1 list-none flex flex-col gap-3 w-full px-5 text-lg">
        
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
          {coupon !== 0 && (
            <div className="flex justify-between ">
              <p>
                <BiSolidOffer className="text-3xl text-green-600 inline mr-2" />
                {couponValue.couponName}
              </p>
              <p
                className="remove-coupon"
                onClick={() => setCouponValue({ couponName: "", value: 0 })}
              >
                <RxCross2 className="text-3xl text-red-500"/>
              </p>
            </div>
        )}
        
         <div className="flex justify-between">
        <h4>Total Amount</h4>
        <h4 className="font-semibold">₹ {totalAmt}</h4>
      </div>
        
      </div>

       <div className="primary-btn text-center" onClick={() => checkoutHandler()}>
        <button className="text-lg px-5 py-1 border-indigo-700 text-indigo-700 border rounded-full">Checkout</button>
      </div>
     
      {totalDiscount > 0 && <p className=" bg-green-200  relative rounded-b-xl w-full text-center py-1">You will save <span className="font-semibold ">₹ {totalDiscount}</span> on this order</p>}

      {/* coupon modal */}

      {couponModal && <div className="absolute w-full   h-full  top-0 ">
              <CouponModal setCouponModal={setCouponModal} />
         </div>}
     
    </div>
  );
}
