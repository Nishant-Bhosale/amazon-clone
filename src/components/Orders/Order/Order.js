import React from "react";
import "./Order.css";
const Order = ({ cart }) => {
	return (
		<div className="order-info-container">
			{cart.map((item) => {
				return (
					<div key={item.id} style={{ margin: "1rem auto" }}>
						<span>{item.title}</span>{" "}
						<span style={{ fontWeight: "bold" }}>Price: {item.price}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Order;
