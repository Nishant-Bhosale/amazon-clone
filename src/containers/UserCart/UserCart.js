import React, { useState, useEffect } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import axios from "axios";
import firebase from "../../utils/firebase";
import "./UserCart.css";
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
	}, []);

	const removeProductFromCart = (productID) => {
		const productRef = firebase.database().ref("cart").child(productID);
		productRef.remove();
		userCart.filter((cartProduct) => {
			console.log(cartProduct);
			return productID !== cartProduct.id;
		});
		// userCart.forEach((item) => {
		// 	if (item.id === productID) {
		// 		console.log(userCart.splice(item.id));
		// 		console.log(userCart);
		// 	}
		// });
	};

	let productOnCartPage = (
		<div className="background">
			<h1 style={{ color: "white", marginTop: "3rem" }}>Your Cart</h1>
			{userCart.map((cartItem) => {
				return (
					<div key={cartItem.id} className="category-product-wrapper">
						<CategoryProduct item={cartItem} />
						<button
							className="deleteBtn"
							onClick={() => removeProductFromCart(cartItem.id)}
						>
							Remove From Cart
						</button>
					</div>
				);
			})}
		</div>
	);
	return <React.Fragment>{productOnCartPage}</React.Fragment>;
};

export default UserCart;
