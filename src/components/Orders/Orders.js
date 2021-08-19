import React from "react";
import Order from "./Order/Order";

const Orders = ({ orders }) => {
	return (
		<div>
			{orders.map((order) => {
				return (
					<div style={{ margin: "2rem auto" }} key={order.date}>
						<h2 style={{ textAlign: "left", marginLeft: "2rem" }}>
							Ordered On: {order.date.split("T")[0]}
						</h2>
						<Order cart={order.cart} />
					</div>
				);
			})}
		</div>
	);
};

export default Orders;
