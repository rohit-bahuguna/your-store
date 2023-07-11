import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthData } from '../../contexts/AuthContext/authContext';
//import { removeFromAddress } from "../../services";
import { ACTION_TYPE } from '../../utils';
import { AddressForm } from './AddressForm';

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
			<div className="profile-container">
				<div className="profile-main-container">
					<h2>Account</h2>

					<div className="profile-main">
						<div className="profile-details">
							<h3 className="details-header">Profile Details</h3>

							<div className="profile-details-main">
								<div className="title">
									<p>Name</p>
									<p>Email</p>
								</div>
								<div>
									<p>
										{name}
									</p>
									<p>
										{' '}{email}
									</p>
								</div>
							</div>
						</div>
						<div className="">
							<h3 className="details-header">Account Settings</h3>
							<button
								className="btn danger setting-logout"
								onClick={() => logOutHandler()}>
								Log Out
							</button>
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
				<AddressForm
					addressForm={addressForm}
					setAddForm={setAddForm}
					formDisplay={formDisplay}
					setFormDisplay={setFormDisplay}
					formValue={formValue}
				/>
			</div>
		</Layout>
	);
}
