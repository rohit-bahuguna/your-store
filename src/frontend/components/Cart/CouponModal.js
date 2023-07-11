import React from "react";
import { useState } from "react";
import { useOrderData } from "../../contexts/orderContext";
import { RxCross2 } from "react-icons/rx";


const COUPONS = [
  { couponName: "MAKE MY DAY", value: 30 },
  { couponName: "YOUR STORE", value: 10 },
  { couponName: "AMAZING YOU", value: 20 },
  { couponName: "SURPRISE ME", value: 50 },
];

export function CouponModal({ setCouponModal }) {
  const { couponValue, setCouponValue } = useOrderData();
  const [input, setInput] = useState(couponValue);

  return (
    <div className="flex justify-center border rounded-xl  h-full  bg-[#ffffff]  items-start py-3 ">
      <div className="flex flex-col gap-6 w-full ">
        <div className="flex  justify-between border-b-2 px-5 py-2 ">
          <h3 className="text-2xl font-semibold">Apply Coupon</h3>
          <RxCross2 className="text-3xl text-red-500 hover:cursor-pointer hover:bg-gray-200 rounded-full " onClick={() => setCouponModal(false)}/>
        </div>

        <div className=" px-5 flex flex-col items-center gap-4">
          {COUPONS.map(({ couponName, value }) => (
            <div className="border self-center px-5 py-2 w-full" key={couponName}>
              <label className="flex gap-5">
                <input
                  type="radio"
                  name="radio"
                  className="w-5"
                  onChange={() =>
                    setInput({
                      ...couponValue,
                      value: value,
                      couponName: couponName,
                    })
                  }
                  checked={value === input.value ? true : false}
                />
                <span className="text-lg">
                  {value}% OFF : <span className="font-semibold">{couponName}</span>
                </span>
              </label>
            </div>
          ))}
        </div>
        <button
          className="px-5 py-1 rounded-full border border-green-600 text-green-700 hover:bg-green-100 text-lg self-center"
          onClick={() => {
            setCouponModal(false);
            setCouponValue(input);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
