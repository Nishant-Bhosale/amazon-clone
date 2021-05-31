import React, { useState, useEffect } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import axios from "axios";
import firebase from "../../utils/firebase";
import "./UserCart.css";
const UserCart = () => {
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

		setUserCart((prevState) => {
			return prevState.filter((cartProduct) => {
				return productID !== cartProduct.id;
			});
		});
	};

	let productOnCartPage = (
		<div className="background">
			<h1 style={{ color: "white", marginTop: "3rem" }}>Your Cart</h1>
			{userCart.map((cartItem) => {
				return (
					<div key={cartItem.id} className="category-product-wrapper">
						<CategoryProduct
							item={cartItem}
							toShow={false}
							clicked={() => removeProductFromCart(cartItem.id)}
						/>
					</div>
				);
			})}
		</div>
	);
	return (
		<React.Fragment>
			{userCart.length <= 0 ? (
				<div className="background">
					<h1 style={{ color: "white", marginTop: "3rem", fontSize: "5rem" }}>
						NO ITEMS FOUND IN YOUR CART
					</h1>
				</div>
			) : (
				productOnCartPage
			)}
		</React.Fragment>
	);
};

export default UserCart;
