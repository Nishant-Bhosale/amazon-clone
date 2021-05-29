import React from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import "./CategoryProduct.css";
import Slide from "react-reveal/Slide";
import ProductImage from "../ProductUI/ProductImage/ProductImage";
import axios from "axios";
import ProductTitle from "../ProductUI/ProductTitle/ProductTitle";
const CategoryProduct = (props) => {
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
		<Slide left>
			<div className="horizontal-product">
				<ProductImage item={props.item} />
				<div className="product-info-wrapper">
					<ProductTitle item={props.item} />
					<ProductInfo
						item={props.item}
						addItemToCart={() => postItemToCart(props.item)}
					/>
				</div>
			</div>
		</Slide>
	);
};

export default CategoryProduct;
