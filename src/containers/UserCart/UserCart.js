import React, { useState, useEffect } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
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
	});
	return (
		<div>
			{userCart.map((cartItem) => {
				return <CategoryProduct item={cartItem} key={cartItem.id} />;
			})}
		</div>
	);
};

export default UserCart;
