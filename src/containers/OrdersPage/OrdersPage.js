import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import Orders from "../../components/Orders/Orders";
import { connect } from "react-redux";

const OrdersPage = (props) => {
	const [orders, setOrders] = useState([]);

	const { userID } = props;
	useEffect(() => {
		const db = firebase.database().ref();

		db.child("orders")
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) {
					const fetchedOrders = [];

					for (let key in snapshot.val()) {
						fetchedOrders.push({ ...snapshot.val()[key], id: key });
					}

					const filteredOrders = fetchedOrders.filter((order) => {
						return userID === order.userID;
					});

					if (filteredOrders.length > 0) {
						const finalOrders = filteredOrders.map((order) => {
							return {
								cart: order.userCart,
								date: order.date,
							};
						});
						setOrders(finalOrders);
					}
				}
			});
	}, [userID]);
	return (
		<div>
			<h1>Your Orders</h1>
			<div>
				<Orders orders={orders} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
	};
};
export default connect(mapStateToProps)(OrdersPage);
