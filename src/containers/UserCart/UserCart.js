import React, { useState, useEffect } from "react";
import TotalPrice from "../../components/ProductContainer/TotalPrice/TotalPrice";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import PopupBar from "../../components/PopupBar/PopupBar";
import firebase from "../../utils/firebase";
import axios from "axios";
import "./UserCart.css";

const UserCart = () => {
	const [userCart, setUserCart] = useState([]);
	const [showPopupBar, setShowPopUpBar] = useState(false);

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

	if (showPopupBar) {
		setTimeout(() => {
			setShowPopUpBar(false);
		}, 2500);
	}

	const removeProductFromCart = (productID) => {
		const productRef = firebase.database().ref("cart").child(productID);
		productRef.remove();

		setUserCart((prevState) => {
			return prevState.filter((cartProduct) => {
				return productID !== cartProduct.id;
			});
		});
		setShowPopUpBar(true);
	};
	let popUpBar = <PopupBar>Item removed Successfully</PopupBar>;

	let productOnCartPage = (
		<div className="background">
			{showPopupBar ? popUpBar : null}
			<TotalPrice items={userCart} />
			<h1 style={{ color: "white", marginTop: "3rem", fontSize: "3rem" }}>
				Your Cart
			</h1>
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
