import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import Orders from "../../components/Orders/Orders";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const OrdersPage = (props) => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);

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
								price: order.price,
							};
						});
						setOrders(finalOrders);
						setLoading(false);
					}
				}
			});
	}, [userID]);

	let page = <Spinner />;

	loading
		? (page = <Spinner />)
		: (page = (
				<div>
					<h1>Order Summary</h1>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Orders orders={orders} />
					</div>
				</div>
		  ));

	return page;
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
	};
};
export default connect(mapStateToProps)(OrdersPage);
