import React from 'react'
import { OrderSummary } from './OrderSummary'

const OrderSummaryPage = () => {
    return (
        <div>
            <h1 className="checkout-main-container ">
                🥂 You order has successfully placed
            </h1>
            <h2>Order Confirmed</h2>

            <OrderSummary />
        </div>
    )
}

export default OrderSummaryPage