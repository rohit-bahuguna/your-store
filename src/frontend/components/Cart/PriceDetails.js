import React from 'react'
import { useOrderData } from '../../contexts/orderContext'
import { useCartData } from '../../contexts/cartContext/cartContext'

const PriceDetails = () => {
    const { priceDetails: { price, discount, coupon, totalAmt } } = useOrderData()
    const { cart } = useCartData()
    return (
        <div className='flex flex-col gap-5  w-screen md:w-1/2'>
            <h4 className="text-xl font-semibold self-center" >PRICE DETAILS</h4>

            <div className="border-b-2 pb-3  flex flex-col gap-4 w-full px-5 text-lg">

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
                    <div className="flex justify-between">
                        <h4>Total Amount</h4>
                        <h4 className="font-semibold">₹ {totalAmt}</h4>
                    </div>

                </div>

        </div>
    )
}

export default PriceDetails