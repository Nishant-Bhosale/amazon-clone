import React from "react";
import "./Product.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
const Product = (props) => {
	const postItemToCart = (item) => {
		axios
			.post(
				"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/cart.json",
				item,
			)
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<Zoom>
			<div className="product">
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
				/>
			</div>
		</Zoom>
	);
};

export default Product;
