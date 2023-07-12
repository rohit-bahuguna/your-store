import React, { useState } from "react";
import { useOrderData } from "../../contexts/orderContext";
import PlaceOrder from "./PlaceOrder"
import AddressCrad from "./AddressCrad";


export function DeliverCard() {
  const { orderAddress } = useOrderData();
  const [changeAddress, setChangeAddress] = useState(false)

  return (
    <div className="w-1/2  flex flex-col gap-8 justify-center items-center">



      {changeAddress && <AddressCrad setChangeAddress={setChangeAddress} />}
      <div className=" flex w-full justify-between items-center" >  <h4 className="text-xl  font-semibold self-center">DELIVER TO</h4>

        <button className={`px-5 py-1 rounded-full text-lg border border-indigo-700 text-indigo-700 hover:bg-indigo-100   ${changeAddress && "hidden"} `}
          onClick={() => setChangeAddress(true)}
        >Change</button>
      </div>
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




    </div>
  );
}
