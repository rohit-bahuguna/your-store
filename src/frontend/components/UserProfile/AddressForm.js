import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthData } from '../../contexts/AuthContext/authContext';
import Input from '../custom/Input';

export function AddressForm({


	formDisplay,
	setFormDisplay,

}) {
	const {
		token,
		dispatchAuthData,
		addUsersAddress,
		removeUsersAddress,
		updateUsersAddress
	} = useAuthData();

	const fillFormValue = (event) => {
		const { value, name } = event.target;
		setAddForm(prev => ({ ...prev, [name]: value }));
	};

	const formValue = {
		name: '',
		street: '',
		city: '',
		state: '',
		country: '',
		pinCode: '',
		mobile: ''
	};
	const [addressForm, setAddForm] = useState(formValue);

	const cancelForm = e => {
		e.preventDefault();
		setFormDisplay(false);
		setAddForm(formValue);
	};

	const fillFormValueWithDummy = e => {
		e.preventDefault();
		setAddForm(form => ({
			...form,
			name: 'Admin',
			street: '33 , MG Road',
			city: 'Pune',
			state: 'Maharashtra',
			country: 'India',
			zipCode: '411046',
			mobile: '12345678'
		}));
	};

	const saveHandler = e => {
		e.preventDefault();
	};

	return (
		<div
			className={`flex h-screen  justify-center w-full   ${!formDisplay
				? 'displayNone'
				: 'displayFlex'}`}>



			<div className='flex flex-col gap-3 w-1/3'>
				<h4 className='text-xl self-center font-semibold'>ADD NEW ADDRESS</h4>
				<Input inputInfo={{
					label: "Name",
					type: "text",
					value: addressForm.name,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "Street",
					type: "text",
					value: addressForm.street,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>


				<Input inputInfo={{
					label: "City",
					type: "text",
					value: addressForm.city,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>


				<Input inputInfo={{
					label: "State",
					type: "text",
					value: addressForm.state,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "Country",
					type: "text",
					value: addressForm.country,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>


				<Input inputInfo={{
					label: "	Pincode",
					type: "number",
					value: addressForm.pinCode,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<Input inputInfo={{
					label: "Mobile Number",
					type: "text",
					value: addressForm.mobile,
					callback: fillFormValue,
					name: "name",
					error: { error: "", status: false }

				}}
					style={"py-1 px-2 rounded border border-gray-400 "}
				/>

				<div className="flex justify-evenly mt-5">


					<button className='btnIndigo'>Save</button>
					<button className='btnRed'
						onClick={() => setFormDisplay(false)}
					>Cancel</button>

				</div>
			</div>


		</div>
	);
}
