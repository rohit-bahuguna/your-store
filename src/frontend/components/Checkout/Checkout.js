import React, { useEffect, useState } from "react";

import { DeliverCard } from "./DeliverCard";
import OrderDetails from './OrderDetails'
import { useOrderData } from "../../contexts/orderContext";
import { ACTION_TYPE } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import { useProductData } from "../../contexts/productContext/productContext";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import Layout from "../common/Layout";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import PlaceOrder from "./PlaceOrder";
import PriceDetails from "../Cart/PriceDetails";

export function Checkout() {
  const { changeTitle } = useProductData();
  changeTitle("Checkout")
  return (
    <Layout>
      <div className=" mb-52">

        <div className=" flex w-full justify-between">
          <OrderDetails />
          <div className="flex px-1 py-3 justify-center gap-5 items-center w-screen md:w-1/2 flex-col ">

            <DeliverCard />
            <PriceDetails />
            <PlaceOrder />
          </div>
        </div>


      </div>
    </Layout >
  );
}
