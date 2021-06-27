import React, { useState } from "react";

const AddressPage = (props) => {
	const [address, setAddress] = useState({
		buildingName: "",
		pinCode: null,
		area: "",
		city: "",
		state: "",
	});

	const { buildingName, pinCode, area, city, state } = address;

	const onChangeHandler = (e) => {
		setAddress({
			...address,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log("Submitted");
	};

	return (
		<div className="container">
			<h1>
				Your <span className="text-primary">Address</span>
			</h1>
			<form onSubmit={onSubmitHandler}>
				<div className="form-group">
					<input
						type="text"
						value={buildingName}
						name="buildingName"
						onChange={onChangeHandler}
						required
						placeholder="Flat, House no., Building, Company"
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						value={pinCode}
						name="pinCode"
						onChange={onChangeHandler}
						required
						placeholder="PIN Code"
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						value={area}
						name="area"
						onChange={onChangeHandler}
						required
						placeholder="Area, Colony, Street, Sector, Village"
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						value={city}
						name="city"
						onChange={onChangeHandler}
						placeholder="Town/City"
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						value={state}
						name="state"
						onChange={onChangeHandler}
						placeholder="State"
					/>
				</div>
				<input
					type="submit"
					value="Add Address"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default AddressPage;
