import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthData } from '../../contexts/AuthContext/authContext';
//import { removeFromAddress } from "../../services";
import { ACTION_TYPE } from '../../utils';
import { AddressForm } from './AddressForm';
import { CgProfile } from "react-icons/cg"
import { FaHandsPraying } from "react-icons/fa6"
import { FiLogOut, FiMoreVertical } from "react-icons/fi"
import Input from "../custom/Input"
import { useProductData } from '../../contexts/productContext/productContext';
import { useCartData } from '../../contexts/cartContext/cartContext';
import Layout from '../../components/common/Layout';

export function UserProfile() {
	const navigate = useNavigate();
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
	const [check, setChecked] = useState(true);
	const formValue = {
		name: '',
		street: '',
		city: '',
		state: '',
		country: '',
		pinCode: '',
		mobile: ''
	};
	const [formDisplay, setFormDisplay] = useState(false);
	const [addressForm, setAddForm] = useState(formValue);
	const [enableEdit, setEnableEdit] = useState(true)
	const [display, setDisplay] = useState('info')
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
		localStorage.removeItem('login');
		localStorage.removeItem('user');
		localStorage.removeItem('signup');

		// // setUser();
		// // setToken("");
		// setLoader(true);
		setTimeout(() => {
			setLoader(false);
		}, 500);
		navigate('/products');
	};
	const editAddress = (
		_id,
		name,
		street,
		city,
		state,
		country,
		pinCode,
		mobile
	) => {
		setFormDisplay(true);
		setAddForm(form => ({
			...form,
			_id,
			name,
			street,
			city,
			state,
			country,
			pinCode,
			mobile
		}));
	};
	changeTitle('My Profile');
	return (
		<Layout>
			<div className="flex gap-10 px-10 w-full mb-36">
				<div className='w-[20%] flex flex-col gap-5 '>
					<div className=' py-2 border-2 rounded-xl  flex justify-evenly items-center'>
						<CgProfile className='text-5xl text-indigo-500' />
						<div>
							<p>Namaste  <FaHandsPraying className='inline text-[#ed62fa]' /> ,</p>
							<p className='text-lg font-semibold'>{name}</p>
						</div>
					</div>
					<div className='border-2 rounded-xl  py-3 px-2'>
						<h1 className='text-lg mb-2 font-semibold'>ACCOUNT SETTINGS</h1>
						<div className=' flex flex-col gap-2 px-3'>
							<p className={`py-1 px-2 rounded hover:cursor-pointer hover:bg-sky-100 ${display === "info" && 'bg-sky-100'}`}
								onClick={() => setDisplay('info')}
							>Profile Information</p>
							<p className={`py-1 px-2 rounded hover:cursor-pointer hover:bg-sky-100 ${display === "address" && 'bg-sky-100'}`}
								onClick={() => setDisplay('address')}
							>Manage Addresses</p>
							<p className={`py-1 px-2 rounded hover:cursor-pointer hover:bg-sky-100`}>

								Logout</p>
						</div>
					</div>
				</div>
				<div className=" grow h-auto border rounded-xl px-5">
					{display === "info" ? <div className="flex flex-col gap-3 py-3">

						<h3 className="text-xl font-semibold self-center">Profile Information</h3>
						<div className="flex items-center  justify-around  ">
							<Input
								inputInfo={{

									label: "Name :",
									type: "text",
									callback: () => { },
									name: "name",
									value: name,
									error: { status: false }
								}}
								style={"border py-1 px-2 disabled:bg-gray-200"}
								disabled={enableEdit}
							/>

							<Input
								inputInfo={{

									label: "Email :",
									type: "email",
									callback: () => { },
									value: email,
									name: "email",
									error: { status: false }
								}}
								style={"border py-1 px-2 disabled:bg-gray-200"}
								disabled={enableEdit}
							/>

							<div className='mt-5'>
								{enableEdit ?
									<button className='px-6 py-1 border-indigo-700 text-indigo-700 hover:bg-indigo-100 border text-lg rounded-full '
										onClick={() => setEnableEdit(false)}
									>
										Edit
									</button> :
									<div className='flex gap-5'>
										<button className='px-6 py-1 border-indigo-700 text-indigo-700 hover:bg-indigo-100 border text-lg rounded-full '

										>
											Save
										</button>
										<button className='px-6 py-1 border-red-500 text-red-500 hover:bg-red-100 border text-lg rounded-full '
											onClick={() => setEnableEdit(true)}
										>
											Cancel
										</button>
									</div>
								}
							</div>
						</div>
					</div> :
						<div className="flex flex-col py-3">
							<h3 className="text-xl font-semibold self-center">My Addresses</h3>

							{addresses &&
								addresses.map(
									({
										_id,
										name,
										street,
										city,
										state,
										country,
										pinCode,
										mobile
									}) => <div key={_id} className="border relative flex justify-between px-10 py-5">
											<div className='flex flex-col gap-2'>
												<p>
													{name} , {street},
												</p>
												<p>
													{city}, {state} {pinCode}  , {country}.
												</p>
											</div>
											<FiMoreVertical />
											<div className="absolute right-0 px-10 border flex flex-col gap-2 w-32 py-3">
												<p
													className="bg-sky-100"
													onClick={() =>
														editAddress(
															_id,
															name,
															street,
															city,
															state,
															country,
															pinCode,
															mobile
														)}>
													Edit
												</p>
												<p className="bg-sky-100">
													{/* onClick={() =>
														removeFromAddress(dataDispatch, _id, token, toast, setFormDisplay)
													} */}
													Remove
												</p>
											</div>
										</div>
								)}

							<button
								onClick={() => {
									setFormDisplay(true);
									setAddForm(formValue);
								}}
								className="address-add">
								Add Address
							</button>
						</div>}
				</div>
				{/* <AddressForm
					addressForm={addressForm}
					setAddForm={setAddForm}
					formDisplay={formDisplay}
					setFormDisplay={setFormDisplay}
					formValue={formValue}
				/> */}
			</div>
		</Layout>
	);
}
