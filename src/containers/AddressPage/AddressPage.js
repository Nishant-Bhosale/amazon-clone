import React, { useState, useEffect } from "react";
import axios from "axios";
import firebase from "../../utils/firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PopupBar from "../../components/PopupBar/PopupBar";

const AddressPage = (props) => {
	const [address, setAddress] = useState({
		buildingName: "",
		pinCode: "",
		area: "",
		city: "",
		state: "",
	});

	const [doesAddressExist, setDoesAddressExist] = useState(false);
	const [success, setSuccess] = useState(false);
	const [text, setText] = useState("");

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
	}, [success]);

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
			// eslint-disable-next-line
			const result = await axios.post(
				"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/addresses.json",
				newAddress,
			);
			setText("Address Added Successfully");
			setSuccess(true);
		} catch (error) {
			console.log(error);
			setSuccess(false);
		}
	};

	const deleteAddress = async () => {
		const db = firebase.database().ref("addresses");

		try {
			// eslint-disable-next-line
			const res = await db.child(address.id).remove();
			setAddress({
				buildingName: "",
				pinCode: "",
				area: "",
				city: "",
				state: "",
			});

			setDoesAddressExist(false);
			setText("Address Deleted Successfully");
			setSuccess(true);
		} catch (error) {
			console.log(error);
		}
	};

	setTimeout(() => {
		setSuccess(false);
	}, 5000);

	return (
		<React.Fragment>
			<div className="container">
				{success ? <PopupBar success={success}>{text}</PopupBar> : null}
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
					{doesAddressExist ? (
						<Link to="/checkout-page" className="btn btn-success btn-block">
							Proceed to Checkout
						</Link>
					) : (
						<input
							type="submit"
							value="Add Address"
							className="btn btn-primary btn-block"
						/>
					)}
					{/* {!doesAddressExist ? (
						
					) : null} */}
				</form>
				{doesAddressExist ? (
					<React.Fragment>
						<button
							className="btn btn-danger btn-block"
							// style={{ width: "91%", margin: "auto" }}
							onClick={() => deleteAddress()}
						>
							Delete Address
						</button>
					</React.Fragment>
				) : null}
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
	};
};
export default connect(mapStateToProps)(AddressPage);
