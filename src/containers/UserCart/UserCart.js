import React, { useState, useEffect } from "react";
import TotalPrice from "../../components/ProductContainer/TotalPrice/TotalPrice";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import PopupBar from "../../components/PopupBar/PopupBar";
import firebase from "../../utils/firebase";
import { Link } from "react-router-dom";
import "./UserCart.css";
import Spinner from "../../components/Spinner/Spinner";
import { connect } from "react-redux";

const UserCart = (props) => {
	const [userCart, setUserCart] = useState([]);
	const [showPopupBar, setShowPopUpBar] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const dbRef = firebase.database().ref();
		dbRef
			.child("cart")
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) {
					const cart = [];

					for (let key in snapshot.val()) {
						cart.push({
							...snapshot.val()[key],
							id: key,
						});
					}

					const filteredCart = cart.filter((cartProduct) => {
						return props.userID === cartProduct.userID;
					});

					setLoading(false);
					setUserCart(filteredCart);
				}
			});
	}, [props.userID]);

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

	let popUpBar = <PopupBar fail={true}>Item removed Successfully</PopupBar>;

	let productOnCartPage = (
		<div className="background">
			{showPopupBar ? popUpBar : null}
			<TotalPrice items={userCart} />
			<h1 style={{ color: "white", marginTop: "3rem", fontSize: "3rem" }}>
				Your Cart
			</h1>
			{userCart.map((cartItem) => {
				return (
					<React.Fragment>
						<div key={cartItem.id} className="category-product-wrapper">
							<CategoryProduct
								item={cartItem}
								toShow={false}
								clicked={() => removeProductFromCart(cartItem.id)}
							/>
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
	return (
		<React.Fragment>
			{!props.isAuth ? (
				<h1>Please Login to See Your Cart!</h1>
			) : loading ? (
				<Spinner />
			) : userCart.length <= 0 ? (
				<div className="background">
					<h1 style={{ color: "white", marginTop: "3rem", fontSize: "5rem" }}>
						NO ITEMS FOUND IN YOUR CART
					</h1>
					<Link to="/">
						<p>Start Adding Products?</p>
					</Link>
				</div>
			) : (
				<div>
					{productOnCartPage}
					<Link to="/address">Place Order</Link>
				</div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
		isAuth: state.userID !== null,
	};
};

export default connect(mapStateToProps)(UserCart);
