import React from "react";
import Product from "../Product/Product";
import "./ProductContainer.css";

const ProductContainer = (props) => {
	let arr = ["product-container"];

	if (props.onCategoryPage) arr.push("oncategory-page");

	return (
		<div className={arr.join(" ")}>
			{props.products.map((product) => {
				return (
					<Product key={product.id} item={product} toShow={props.toShow} />
				);
			})}
		</div>
	);
};

export default ProductContainer;
