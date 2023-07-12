import React from 'react'
import { useCartData } from '../../contexts/cartContext/cartContext';

const OrderDetails = () => {
    const { cart } = useCartData();

    return (
        <div className=' flex-col gap-3 flex justify-start px-10  w-1/2'>
            <h4 className="text-xl  font-semibold self-center">ORDER DETAILS</h4>

            <table className=" ">
                <thead>
                    <tr>
                        <th className="border-y border-gray-400">Item</th>
                        <th className="border-y border-l border-gray-400">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(({ _id, title, scale, qty }) => (
                        <tr key={_id}>
                            <td className="border-y py-1 text-center">{title}</td>
                            <td className="border-y py-1 border-l text-center">{qty} {scale}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderDetails