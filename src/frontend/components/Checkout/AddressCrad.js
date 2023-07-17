import React from 'react'
import { useAuthData } from '../../contexts/AuthContext/authContext'
import { useOrderData } from '../../contexts/orderContext';
import { ACTION_TYPE } from "../../utils";
import { Link } from 'react-router-dom';


const AddressCrad = ({ setChangeAddress }) => {
    const { addresses } = useAuthData()
    const { orderAddress, dispatch } = useOrderData();

    return (
        <div className="flex items-center  mt-5 flex-col gap-5">

            <h4 className="text-xl  font-semibold self-center">Select Delivery Address</h4>
            <div className='flex flex-col gap-3'>
                {
                    addresses && addresses.map(({ _id, name, houseNumber, street, city, state, country, pinCode, mobile }) => (
                        <div key={_id} className="flex gap-5">
                            <label className="select-input">
                                <input
                                    type="radio"
                                    name="radio"

                                    checked={orderAddress._id === _id}
                                    onChange={() =>
                                        dispatch({
                                            type: ACTION_TYPE.ORDER_ADDRESS,
                                            payload: {
                                                _id,
                                                name,
                                                houseNumber,
                                                street,
                                                city,
                                                state,
                                                country,
                                                pinCode,
                                                mobile,
                                            },
                                        })
                                    }
                                />

                            </label>
                            <div >
                                <p>{houseNumber} , {name} , {street},</p>
                                <p >
                                    {city},{state}. {pinCode}
                                </p>
                                <p >{country}.</p>

                            </div>
                        </div>
                    ))

                }
            </div>

            <div className='flex w-full  justify-between'>

                <Link to="/user-profile" state={"address"}>
                    <button className="px-5 py-1 rounded-full text-lg border border-indigo-700 text-indigo-700 hover:bg-indigo-100">

                        Add New Address

                    </button>
                </Link>




                <button className="px-5 py-1 rounded-full text-lg border border-red-500 text-red-500 hover:bg-red-100"
                    onClick={() => setChangeAddress(false)}
                >

                    Close

                </button>
            </div>
        </div>
    )
}

export default AddressCrad