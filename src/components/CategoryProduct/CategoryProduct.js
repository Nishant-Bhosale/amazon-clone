import React, { useState } from "react";
import ProductTitle from "../ProductUI/ProductTitle/ProductTitle";
import ProductImage from "../ProductUI/ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import PopupBar from "../PopupBar/PopupBar";
import Slide from "react-reveal/Slide";
import { connect } from "react-redux";
import "./CategoryProduct.css";
import axios from "axios";

const CategoryProduct = (props) => {
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);

	const postItemToCart = (item, userID) => {
		setSuccess(true);
		if (props.userID !== null) {
			const newProduct = { ...item, userID: userID };
			axios
				.post(
					"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json",
					newProduct,
				)
				.then((res) => {
					setFail(false);
					setSuccess(true);
				})
				.catch((err) => {
					setFail(true);
					setSuccess(false);
				});
		}
	};

	let popUpBar;

	if (success) {
		popUpBar = (
			<PopupBar success={success}>
				{props.userID ? "ITEM ADDED SUCCESSFULLY" : "LOGIN TO ADD ITEMS"}
			</PopupBar>
		);
	} else if (fail) {
		popUpBar = (
			<PopupBar fail={fail}>ITEM WAS NOT ADDED. SOMETHING WENT WRONG</PopupBar>
		);
	}

	if (popUpBar) {
		setTimeout(() => {
			setFail(false);
			setSuccess(false);
		}, 3000);
	}

	return (
		<Slide left>
			<div className="horizontal-product">
				{popUpBar}
				<ProductImage item={props.item} />
				<div className="product-info-wrapper">
					<ProductTitle item={props.item} />
					<ProductInfo
						item={props.item}
						addItemToCart={() => postItemToCart(props.item, props.userID)}
						showIcon={props.toShow}
						delete={props.clicked}
					/>
				</div>
			</div>
		</Slide>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
	};
};
export default connect(mapStateToProps)(CategoryProduct);
