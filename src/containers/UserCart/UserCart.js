import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCart = (props) => {
	const [userCart, setUserCart] = useState([]);
	useEffect(() => {
		axios
			.get("https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json")
			.then((res) => {
				const cart = [];
				for (let key in res.data) {
					cart.push({
						...res.data[key],
						id: key,
					});
				}

				setUserCart(cart);
			});

		// const data = {
		// 	name: "ram",
		// 	price: "3",
		// };
		// axios
		// 	.post(
		// 		"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json",
		// 		data,
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
	});
	return (
		<div>
			{userCart.map((cartItem) => {
				return <h1>{cartItem.name}</h1>;
			})}
		</div>
	);
};

export default UserCart;
