import React from "react";

const Order = ({ cart }) => {
	return (
		<div>
			{cart.map((item) => {
				return <p key={item.id}>{item.title}</p>;
			})}
		</div>
	);
};

export default Order;
