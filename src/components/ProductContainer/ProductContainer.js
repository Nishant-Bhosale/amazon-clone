import React from "react";
import Product from "../Product/Product";
import "./ProductContainer.css";

const ProductContainer = (props) => {
	return (
		<div className="product-container">
			<img
				src={`${process.env.PUBLIC_URL}/images/black-background.jpg`}
				alt=""
				className="img"
			/>
			{props.products.map((product) => {
				return <Product key={product.id} item={product} />;
			})}
		</div>
	);
};

export default ProductContainer;
