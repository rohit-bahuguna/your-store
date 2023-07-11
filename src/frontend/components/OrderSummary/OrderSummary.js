import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductData } from "../../contexts/productContext/productContext";
import { useOrderData } from "../../contexts/orderContext";


export function OrderSummary() {
  const {
    order: { amount, paymentId, delivery, products },
  } = useOrderData();

  const { changeTitle } = useProductData();
  changeTitle("Order Summery")
  return (

    <div className="summary-wrapper flex-center">
      {paymentId ? (
        <>
          <h3>Order Summary</h3>
          <div className="summary-container">
            <h3 className="summary-header ">Order Confirmed</h3>
            <div className="summary-main">
              <div className="summary-left">
                <h4>
                  Payment Id : <span>{paymentId}</span>
                </h4>
                <h4>
                  Total Amount : <span>₹ {amount}</span>
                </h4>
                <div>
                  <h4>Order will be delivered to :</h4>
                  <p>{delivery.name}</p>

                  <p className="paragraph-sm">
                    {delivery.street}, {delivery.city} ,
                  </p>
                  <p className="paragraph-sm">
                    {delivery.state} ,{delivery.country}. {delivery.zipCode}
                  </p>
                  <p className="paragraph-sm">Phone Number : {delivery.mobile}</p>
                </div>
              </div>
              <div className="summary-right">
                {products.map(({ image, title, price, qty }) => (
                  <div className="card horizontal-container">
                    <div className="card-horizontal">
                      <img className="card-img horizontal-img" src={image} alt={title} />
                      <div className="card-info">
                        <div className="card-title">
                          <div>
                            <h4>{title}</h4>

                          </div>
                        </div>
                        <div className="price">
                          <p>Total Quantity : {qty}</p>
                          <p>Price : ₹ {price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 class="order-msg">Look's like your order is empty.</h3>
          <Link to="/products">
            <button className="link-btn">Shop Now</button>
          </Link>
        </>
      )}
    </div>

  );
}
