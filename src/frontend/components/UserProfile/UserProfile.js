import { toast } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { ACTION_TYPE } from '../../utils';
import { AddressForm } from './AddressForm';
import { CgProfile } from "react-icons/cg"
import { FaHandsPraying } from "react-icons/fa6"
import Input from "../custom/Input"
import { useProductData } from '../../contexts/productContext/productContext';
import { useCartData } from '../../contexts/cartContext/cartContext';
import Layout from '../../components/common/Layout';
import AddressCard from './AddressCard';
import { OrderSummary } from '../OrderSummary/OrderSummary';

export function UserProfile() {
	const navigate = useNavigate();
	const location = useLocation()
	const {
		user: { name, email },
		token,
		dispatchAuthData,
		addresses
	} = useAuthData();
	const {
		setLoader,
		dataDispatch,
		address,
		changeTitle,
		dispatchProductData
	} = useProductData();
	const { dispatchCartData } = useCartData();


	const [formDisplay, setFormDisplay] = useState({
		status: false,
		id: ""
	});
	const [display, setDisplay] = useState(location.state || 'info')
	const logOutHandler = () => {
		dispatchAuthData({
			type: ACTION_TYPE.LOG_OUT
		});
		dispatchCartData({
			type: ACTION_TYPE.LOG_OUT
		});
		dispatchProductData({
			type: ACTION_TYPE.LOG_OUT
		});
		toast.success("Logout Successfully")
		localStorage.removeItem('token');
		localStorage.removeItem('user');


		navigate('/products');
	};

	changeTitle('My Profile');
	return (
		<Layout>
			<div className="flex md:flex-row flex-col  md:px-10  gap-10  w-full mb-36 relative">
				<div className='md:w-[20%] flex flex-col gap-5 mx-2'>
					<div className=' py-2 border-2 rounded-xl  flex justify-evenly items-center'>
						<CgProfile className='text-5xl text-indigo-500' />
						<div>
							<p>Namaste  <FaHandsPraying className='inline text-[#ed62fa]' /> ,</p>
							<p className='text-lg font-semibold'>{name}</p>
						</div>
					</div>
					<div className='border-2 rounded-xl  py-3 md:px-2'>
						<h1 className='text-lg mb-2 font-semibold hidden md:block'>ACCOUNT SETTINGS</h1>
						<div className=' flex md:flex-col gap-2 px-3'>
							<p className={`py-1 md:px-2 text-center md:text-start rounded hover:cursor-pointer hover:bg-indigo-100 ${display === "info" && 'changeColor'}`}
								onClick={() => setDisplay('info')}
							>Profile Information</p>
							<p className={`py-1 md:px-2 text-center md:text-start rounded hover:cursor-pointer hover:bg-indigo-100 ${display === "address" && 'changeColor '}`}
								onClick={() => setDisplay('address')}
							>Manage Addresses</p>
							<p className={`py-1 md:px-2 text-center md:text-start rounded hover:cursor-pointer hover:bg-indigo-100 ${display === "order" && 'changeColor '}`}
								onClick={() => setDisplay('order')}
							>Orders Details</p>
							<p className={`hidden md:block py-1 md:px-2 text-center md:text-start rounded hover:cursor-pointer hover:bg-indigo-100`} onClick={() => logOutHandler()}>

								Logout</p>
						</div>
					</div>
				</div>
				<div className="  grow h-auto md:border rounded-xl md:px-5 px-2">
					{display === "info" && <div className="flex  flex-col gap-5 py-3">

						<h3 className="text-xl font-semibold self-center">Profile Information</h3>
						<div className="flex flex-col gap-5 md:text-xl  justify-around  ">

							<div className='flex md:gap-10 gap-5'>
								<span className='font-semibold'>Name : </span>
								<span >{name}</span>
							</div>
							<div className='flex md:gap-10 gap-5'>
								<span className='font-semibold'>Email : </span>
								<span>{email}</span>
							</div>

						</div>
					</div>}
					{
						display === "address" && <div className="flex gap-5 flex-col py-3">
							<h3 className="text-xl font-semibold self-center">My Addresses</h3>

							{addresses &&
								addresses.map(
									(address) => <AddressCard key={address._id} address={address} setFormDisplay={setFormDisplay} formDisplay={formDisplay} />
								)}

							<div className='self-center'>

								<button
									onClick={() => {
										setFormDisplay({ id: "", status: true });
										//setAddForm(formValue);
									}}
									className="btnIndigo text-lg">
									Add Address 
								</button>
							</div>
						</div>}

					{
						display === "order" && <div className='pb-5'>
							<OrderSummary />
						</div>
					}
				</div>
				{formDisplay.status && <div className='absolute   w-full bg-[#ffff] '>
					<AddressForm
						formDisplay={formDisplay}
						setFormDisplay={setFormDisplay}
					/>
				</div>}
			</div>
		</Layout>
	);
}
