import React from "react";
import Order from "./Order/Order";

const Orders = ({ orders }) => {
	return (
		<div>
			{orders.map((order) => {
				console.log(order);

				return (
					<>
						<p>{order.date}</p>
						<Order cart={order.cart} />
					</>
				);
			})}
		</div>
	);
};

export default Orders;
