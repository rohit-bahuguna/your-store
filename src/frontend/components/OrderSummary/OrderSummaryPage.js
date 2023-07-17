import React from 'react'
import { OrderSummary } from './OrderSummary'
import Layout from "../common/Layout"
import { Link, useLocation } from 'react-router-dom'
const OrderSummaryPage = () => {
    const location = useLocation()
    return (
        <Layout>
            <div className='flex w-full  flex-col items-center gap-5 py-5'>
                {
                    location.state && <>
                        <h1 className="text-lg font-semibold ">
                            🥂 You order has successfully placed
                        </h1>
                        <h2 className="text-lg font-semibold ">Order Confirmed</h2></>
                }

                <OrderSummary />
                <div className='mt-5'>
                    <Link to="/products">
                        <button className='btnIndigo'>
                            Shop More
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default OrderSummaryPage