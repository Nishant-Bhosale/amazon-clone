import React, { useState, useEffect } from "react";
import TotalPrice from "../../components/ProductContainer/TotalPrice/TotalPrice";
import PopupBar from "../../components/PopupBar/PopupBar";
import { Link } from "react-router-dom";
import "./UserCart.css";
import Spinner from "../../components/Spinner/Spinner";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import { removeItem, fetchUserCart } from "../../store/actions/actions";

const UserCart = (props) => {
	const [showPopupBar, setShowPopUpBar] = useState(false);
	const [loading, setLoading] = useState(false);

	const { userCart, userID, fetchUserCart } = props;

	useEffect(() => {
		fetchUserCart(props.userID);
	}, [userID]);

	if (showPopupBar) {
		setTimeout(() => {
			setShowPopUpBar(false);
		}, 2500);
	}

	// const removeProductFromCart = (productID) => {
	// 	const productRef = firebase.database().ref("cart").child(productID);
	// 	productRef.remove();

	// 	setUserCart((prevState) => {
	// 		return prevState.filter((cartProduct) => {
	// 			return productID !== cartProduct.id;
	// 		});
	// 	});

	// 	setShowPopUpBar(true);
	// };

	let popUpBar = <PopupBar fail={true}>Item removed Successfully</PopupBar>;

	let productOnCartPage = (
		<div className="background">
			{showPopupBar ? popUpBar : null}
			{/* <TotalPrice items={userCart} /> */}
			<h1 style={{ color: "white", margin: "1rem 0", fontSize: "3rem" }}>
				{userCart && userCart.length > 0
					? "Your Cart"
					: "NO ITEMS FOUND IN YOUR CART"}
			</h1>

			<div className="user-cart-container">
				{userCart
					? userCart.map((cartItem) => {
							return (
								<Product
									key={cartItem.id}
									item={cartItem}
									toShow={false}
									clicked={() => {
										props.removeProductFromCart(cartItem.id);
										setShowPopUpBar(true);
									}}
								/>
							);
					  })
					: null}
			</div>
			{userCart && userCart.length > 0 ? (
				<Link to="/address" className="order-btn">
					Place Order
				</Link>
			) : (
				<Link to="/">Start adding Products</Link>
			)}
		</div>
	);
	return (
		<React.Fragment>
			{!props.isAuth ? (
				<h1>Please Login to See Your Cart!</h1>
			) : loading ? (
				<Spinner />
			) : (
				<div>{productOnCartPage}</div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
		isAuth: state.userID !== null,
		userCart: state.userCart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeProductFromCart: (id) => dispatch(removeItem(id)),
		fetchUserCart: (id) => dispatch(fetchUserCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
