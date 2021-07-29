import React, { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import PopupBar from "../PopupBar/PopupBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./Product.css";

const Product = (props) => {
	const [showPopupBar, setShowPopUpBar] = useState(false);
	const [error, setError] = useState(null);

	const postItemToCart = async (item, userID) => {
		if (props.userID !== null) {
			const newProduct = { ...item, userID };

			try {
				const result = await axios.post(
					"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json",
					newProduct,
				);
				console.log(result);
				setError(false);
				setShowPopUpBar(true);
			} catch (error) {
				setShowPopUpBar(true);
				setError(true);
			}
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
							className="product-img"
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
