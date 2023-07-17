import React, { useRef, useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { useAuthData } from "../../contexts/AuthContext/authContext"
import { useOutsideClick } from "../../hooks/useOutsideClick"


const AddressCard = ({ address: { name,
    street,
    city,
    state,
    country,
    pinCode, mobile, _id }, setFormDisplay }) => {
    const [open, setOpen] = useState(false);

    const {
        token,
        removeUsersAddress
    } = useAuthData();

    const modalRef = useRef()
    useOutsideClick(modalRef, () => setOpen(false))

    return (
        <div className="border-b-2 border-gray-500 relative flex justify-between px-10 py-5">
            <div className='flex flex-col gap-2'>
                <p>
                    {name} , {street},
                </p>
                <p>
                    {city}, {state} {pinCode}  , {country}.
                </p>
                <p>{mobile}</p>
            </div>
            <FiMoreVertical className='text-xl cursor-pointer' onClick={() => setOpen(true)} />
            {open && <div className="absolute right-10 rounded x-10 bg-white bottom-5  border flex flex-col py-2  w-32 "
                ref={modalRef}
            >
                <p
                    className="px-5 py-1  text-indigo-700  hover:bg-indigo-200 hover:cursor-pointer "
                    onClick={() => setFormDisplay({ status: true, id: _id })}
                >
                    Edit
                </p>
                <p className=" px-5 py-1 text-red-500   hover:bg-red-100 hover:cursor-pointer"
                    onClick={() => removeUsersAddress(_id, token)}
                >

                    Remove
                </p>

            </div>}
        </div>
    )
}

export default AddressCard