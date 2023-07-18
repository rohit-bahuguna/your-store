import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthData } from '../../contexts/AuthContext/authContext';
import Input from '../custom/Input';

export function AddressForm({ formDisplay, setFormDisplay }) {

	const {
		token,
		dispatchAuthData,
		addUsersAddress,
		removeUsersAddress,
		updateUsersAddress,
		addresses
	} = useAuthData();

	const getAddressData = (e) => {
		const { value, name } = e.target;
		if (name === 'pinCode') {
			value.toString().length <= 6 && setAddForm(prev => ({ ...prev, [name]: value }));
			//console.log(value.toString().length)
		}
		else if (name === 'mobile') {
			value.toString().length <= 10 && setAddForm(prev => ({ ...prev, [name]: value }));

		} else {
			setAddForm(prev => ({ ...prev, [name]: value }));
		}
	};

	const formValue = {
		houseNumber: '',
		name: '',
		street: '',
		city: '',
		state: '',
		country: '',
		pinCode: '',
		mobile: ''
	};
	const [addressForm, setAddForm] = useState(formValue);

	const cancelHandler = e => {
		e.preventDefault();
		setAddForm(formValue);
		setFormDisplay({ ...formDisplay, status: false })

	};

	const fillDummyData = e => {
		e.preventDefault();
		setAddForm(form => ({
			...form,
			houseNumber: 32,
			name: 'dummy',
			street: 'dummy Road',
			city: 'Haldwani',
			state: 'Uttarakhand',
			country: 'India',
			pinCode: 263232,
			mobile: 1254254624
		}));
	};

	const saveAddress = e => {
		e.preventDefault();

		addUsersAddress(addressForm)
		setFormDisplay({ ...formDisplay, status: false })

	};

	useEffect(() => {

		if (formDisplay.id) {
			const currentAddress = addresses.filter(({ _id }) => _id === formDisplay.id)
			setAddForm({ ...currentAddress[0] })
		}

	}, [formDisplay.id])


	return (
		<div
			className={`flex md:h-screen   justify-center w-full   }`}>



			<div className='flex flex-col gap-3 md:w-1/3'>
				<h4 className='text-xl self-center font-semibold'>ADD NEW ADDRESS</h4>
				<Input inputInfo={{
					label: "Name",
					type: "text",
					value: addressForm.name,
					callback: getAddressData,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "House Number",
					type: "number",
					value: addressForm.houseNumber,
					callback: getAddressData,
					name: "houseNumber",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "Street",
					type: "text",
					value: addressForm.street,
					callback: getAddressData,
					name: "street",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>


				<Input inputInfo={{
					label: "City",
					type: "text",
					value: addressForm.city,
					callback: getAddressData,
					name: "city",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>




				<Input inputInfo={{
					label: "Country",
					type: "text",
					value: addressForm.country,
					callback: getAddressData,
					name: "country",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "State",
					type: "text",
					value: addressForm.state,
					callback: getAddressData,
					name: "state",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "	Pincode",
					type: "number",
					value: addressForm.pinCode,
					callback: getAddressData,
					name: "pinCode",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "Mobile Number",
					type: "text",
					value: addressForm.mobile,
					callback: getAddressData,
					name: "mobile",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<div className="flex gap-2 justify-evenly md:mt-5 pb-1">



					{
						!formDisplay.id ? <button className='btnIndigo' onClick={saveAddress}>Save</button> : <button className='btnIndigo' onClick={() => {
							updateUsersAddress(addressForm, token)
							setFormDisplay({ status: false, id: "" })
						}}>Update</button>
					}
					<button className='btnIndigo' onClick={fillDummyData}>Fill Dummy Data</button>
					<button className='btnRed'
						onClick={cancelHandler}
					>Cancel</button>

				</div>
			</div>


		</div>
	);
}
