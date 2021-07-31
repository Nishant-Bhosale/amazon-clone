import React, { useState, useEffect } from "react";
import "./TotalPrice.css";
const TotalPrice = (props) => {
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let total = 0;
		props.items.forEach((product) => {
			total += product.price;
		});
		setTotalPrice(total);
	}, [props.items]);

	return (
		<div className="totalPrice">
			<h3>
				Total: {""}$ {totalPrice.toFixed(2)}
			</h3>
		</div>
	);
};

export default TotalPrice;
