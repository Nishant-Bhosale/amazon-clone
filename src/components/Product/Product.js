import React, { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import CartIcon from "../../components/ProductInfo/CartIcon/CartIcon";
import PopupBar from "../PopupBar/PopupBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./Product.css";

const Product = (props) => {
	const [showPopupBar, setShowPopUpBar] = useState(false);
	const [error, setError] = useState(null);

	const postItemToCart = (item, userID) => {
		if (props.userID !== null) {
			const newProduct = { ...item, userID };
			axios
				.post(
					"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json",
					newProduct,
				)
				.then((res) => {
					setError(false);
					setShowPopUpBar(true);
				})
				.catch((err) => {
					setShowPopUpBar(true);
					setError(true);
				});
		}
	};

	let popUpBar = (
		<PopupBar success={true}>
			{error
				? "PRODUCT NOT ADDED. SOMETHING WENT WRONG. TRY AGAIN"
				: "PRODUCT ADDED SUCCESSFULLY"}
		</PopupBar>
	);

	if (showPopupBar) {
		setTimeout(() => {
			setShowPopUpBar(false);
		}, 2000);
	}

	return (
		<React.Fragment>
			{showPopupBar ? popUpBar : null}

			<div className="product">
				<div className="tip">
					<Link
						to={{
							pathname: "/productinfopage",
							state: { value: props.item },
						}}
						title="Click to see"
					>
						<img
							src={props.item.image}
							alt=""
							loading="lazy"
							style={{
								height: "230px",
								width: "190px",
								backgroundColor: "transparent",
							}}
						/>
					</Link>
					<span>
						<div>Click To See More</div> {props.item.title}
					</span>
				</div>
				<ProductInfo
					item={props.item}
					addItemToCart={() => postItemToCart(props.item, props.userID)}
					showIcon={props.toShow}
					clicked={props.clicked}
				/>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		userID: state.userID,
	};
};
export default connect(mapStateToProps)(Product);
