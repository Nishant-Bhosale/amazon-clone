import React, { useEffect } from "react";
import firebase from "../../utils/firebase";

const OrdersPage = () => {
	useEffect(() => {
		const db = firebase.database().ref();

		let fetchedOrders = {};

		db.child("orders")
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
					// for (let key in snapshot.val()) {
					// 	fetchedAddress = { ...snapshot.val()[key], id: key };
					// }
				}
			});
	}, []);
	return (
		<div>
			<h1>Your Orders</h1>
		</div>
	);
};

export default OrdersPage;
