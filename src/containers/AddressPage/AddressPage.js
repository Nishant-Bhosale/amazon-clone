import React, { useState, useEffect } from "react";
import axios from "axios";
import firebase from "../../utils/firebase";
import { connect } from "react-redux";

const AddressPage = (props) => {
	const [address, setAddress] = useState({
		buildingName: "",
		pinCode: "",
		area: "",
		city: "",
		state: "",
	});
	const [doesAddressExist, setDoesAddressExist] = useState(false);

	const { buildingName, pinCode, area, city, state } = address;

	useEffect(() => {
		const db = firebase.database().ref();

		let fetchedAddress = {};

		db.child("addresses")
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) {
					setDoesAddressExist(true);
					for (let key in snapshot.val()) {
						fetchedAddress = { ...snapshot.val()[key], id: key };
					}
					setAddress(fetchedAddress);
				}
			});
	}, []);

	const onChangeHandler = (e) => {
		setAddress({
			...address,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		const newAddress = { ...address, userID: props.userID };

		try {
			const result = await axios.post(
				"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/addresses.json",
				newAddress,
			);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	// const deleteAddress = (e) => {
	// 	e.preventDefault();
	// 	const db
	// }

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
					value={doesAddressExist ? "Edit Address" : "Add Address"}
					className="btn btn-primary btn-block"
				/>
			</form>
			{doesAddressExist ? (
				<button className="btn btn-danger btn-block">Delete Address</button>
			) : null}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
	};
};
export default connect(mapStateToProps)(AddressPage);
