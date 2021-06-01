import React, { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import PopupBar from "../PopupBar/PopupBar";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const Product = (props) => {
	const [showPopupBar, setShowPopUpBar] = useState(false);
	const postItemToCart = (item) => {
		axios
			.post(
				"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json",
				item,
			)
			.then((res) => {
				console.log(res);
				setShowPopUpBar(true);
				setTimeout(() => {
					setShowPopUpBar(false);
				}, 2000);
			});
	};

	let popUpBar = <PopupBar>PRODUCT ADDED SUCCESSFULLY</PopupBar>;
	return (
		<React.Fragment>
			{showPopupBar ? popUpBar : null}

			<Zoom>
				<div className="product">
					<Link
						to={{ pathname: "productinfopage", state: { value: props.item } }}
					>
						<div className="tip">
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
							<span>{props.item.title}</span>
						</div>
						<ProductInfo
							item={props.item}
							addItemToCart={() => postItemToCart(props.item)}
							showIcon={true}
						/>
					</Link>
				</div>
			</Zoom>
		</React.Fragment>
	);
};

export default Product;
