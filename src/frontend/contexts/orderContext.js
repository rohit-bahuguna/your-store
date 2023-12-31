import { createContext, useContext, useReducer, useState } from "react";
import { orderState, orderReducer } from "../reducer/OrderReducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, orderState);
  const [couponValue, setCouponValue] = useState({ couponName: "YOUR STORE", value: 10 });

  const [order, setOrder] = useState({});

  return (
    <OrderContext.Provider
      value={{
        priceDetails: state.priceDetails,
        orderAddress: state.orderAddress,
        dispatch,
        couponValue,
        setCouponValue,
        order,
        setOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrderData = () => useContext(OrderContext);

export { useOrderData, OrderProvider };
