import React, { useState } from "react";
import { useOrderData } from "../../contexts/orderContext";
import PlaceOrder from "./PlaceOrder"
import AddressCrad from "./AddressCrad";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import { Link } from "react-router-dom";


export function DeliverCard() {
  const { orderAddress } = useOrderData();
  const [changeAddress, setChangeAddress] = useState(false)
  const { addresses } = useAuthData()
  return (
    <div className="  flex flex-col gap-8 justify-center items-center">

      {/**/}

      {addresses.length > 0 ? <>
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
      </>
        :
        <div className="flex flex-col text-lg   gap-3 items-center mb-2">
          <h2 >Please add Your Address To Place The Order </h2>

          <Link to="/user-profile" state={"address"}>
            <button className="px-5 py-1 rounded- border rounded-full text-lg border-indigo-700  text-indigo-700 hover:bg-indigo-100">

              Add  Address

            </button>
          </Link>

        </div>
      }



    </div>
  );
}
