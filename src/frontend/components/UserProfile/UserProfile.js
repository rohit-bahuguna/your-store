import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthData } from '../../contexts/AuthContext/authContext';
//import { removeFromAddress } from "../../services";
import { ACTION_TYPE } from '../../utils';
import { AddressForm } from './AddressForm';
import { CgProfile } from "react-icons/cg"
import { FaHandsPraying } from "react-icons/fa6"
import { FiLogOut } from "react-icons/fi"
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
		zipCode: '',
		mobile: ''
	};
	const [formDisplay, setFormDisplay] = useState(false);
	const [addressForm, setAddForm] = useState(formValue);

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
		zipCode,
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
			zipCode,
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
							<p className=' py-1 px-2 rounded hover:cursor-pointer hover:bg-sky-100'>Profile Information</p>
							<p className=' py-1 px-2 rounded hover:cursor-pointer hover:bg-sky-100'>Manage Addresses</p>
							<p className=' py-1 px-2 rounded hover:cursor-pointer hover:bg-sky-100'>

								Logout</p>
						</div>
					</div>
				</div>
				<div className=" grow h-auto border rounded-xl px-5">
					<div className="flex flex-col gap-3 py-3">

						<h3 className="text-xl font-semibold self-center">Profile Information</h3>
						<div className="flex items-center border justify-around  ">
							<Input
								inputInfo={{

									label: "Name :",
									type: "text",
									callback: () => { },
									name: "name",
									value: name,
									error: { status: false }
								}}
								style={"border py-1 px-2"}
								disabled={true}
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
								style={"border py-1 px-2"}
								disabled={true}
							/>

							<div>
								<button className='px-5 py-1 border-indigo-700 text-indigo-700 hover:bg-indigo-100 border text-lg rounded-full '>
									Edit
								</button>
							</div>
						</div>



						<div className="">
							<h3 className="details-header">My Addresses</h3>

							{address &&
								address.map(
									({
										_id,
										name,
										street,
										city,
										state,
										country,
										zipCode,
										mobile
									}) =>
										<div key={_id} className="address-container">
											<p>
												{name}
											</p>
											<div>
												<p>
													{street}, {city},{state}. {zipCode}
												</p>
												<p>
													{country}.
												</p>
												<p>
													Phone Number : {mobile}
												</p>
											</div>
											<div className="address-btn">
												<button
													className="btn outlined-default address-edit"
													onClick={() =>
														editAddress(
															_id,
															name,
															street,
															city,
															state,
															country,
															zipCode,
															mobile
														)}>
													Edit
												</button>
												<button className="btn outlined-danger address-remove">
													{/* onClick={() =>
														removeFromAddress(dataDispatch, _id, token, toast, setFormDisplay)
													} */}
													Remove
												</button>
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
						</div>

					</div>
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
