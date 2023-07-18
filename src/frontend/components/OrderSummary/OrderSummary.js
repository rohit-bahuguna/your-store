import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductData } from "../../contexts/productContext/productContext";
import { useOrderData } from "../../contexts/orderContext";


export const OrderSummary = () => {
  const {
    order: { amount, paymentId, delivery, products },
  } = useOrderData();

  const { changeTitle } = useProductData();
  changeTitle("Order Summery")
  return (

    <div className="w-full md:px-10 px-1">
      {paymentId ? 
        <>


          <div className="flex md:flex-row md:gap-0 flex-col gap-5   justify-between">

            <div className="flex flex-col  md:w-1/3 gap-3 text-lg">
              <h3 className="text-xl font-semibold text-center py-2">Payment Summary</h3>
              <h4 className="flex gap-5 ">
                Payment Id : <span>{paymentId}</span>
              </h4>
              <h4 className="flex gap-5 ">
                Total Amount : <span>₹ {amount}</span>
              </h4>
              <div className="flex flex-col gap-3">
                <h4>Order will be delivered to :</h4>
                <div><p>{delivery.name}</p>

                  <p className="paragraph-sm">
                    {delivery.street}, {delivery.city} ,
                  </p>
                  <p className="paragraph-sm">
                    {delivery.state} ,{delivery.country}. {delivery.zipCode}
                  </p>
                  {delivery.mobile && <p className="paragraph-sm">Phone Number : {delivery.mobile}</p>}
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5">
              <p className=" text-xl text-center font-semibold">Ordered Items</p>
              {products.map(({ image, title, price, qty }) => (

                <div className="flex py-2 justify-around border-b-2 border-gray-400">
                  <img className="w-24 h-auto" src={image} alt={title} />
                    <div className="card-info">
                      <div className="card-title">
                        <div>
                        <h4 className="text-lg font-semibold">{title}</h4>

                        </div>
                      </div>
                      <div className="price">
                      <p>Total Quantity : <span className="font-semibold"> {qty}</span></p>
                      <p>Price :
                        <span className="font-semibold"> ₹ {price}</span>
                      </p>
                      </div>
                    </div>
                  </div>

              ))}
            </div>
          </div>
        </>
        : (
          <div className="flex flex-col items-center gap-10 py-5">
            <h3 class="text-2xl text-center">Look's like your haven't ordered anything.</h3>
          <Link to="/products">
              <button className="btnIndigo">Shop Now</button>
          </Link>
          </div>
      )}
    </div>

  );
}
