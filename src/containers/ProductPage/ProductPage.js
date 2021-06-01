import React from "react";
import ProductImage from "../../components/ProductUI/ProductImage/ProductImage";
import "./ProductPage.css";

const ProductPage = (props) => {
	const properties = props.location.state.value;
	return (
		<div className="product-page-wrapper">
			<h1 style={{ fontSize: "3rem" }}>{properties.title}</h1>
			<div className="product-description">
				<ProductImage item={properties} title={properties} />
				<div className="description-wrapper">
					<p>{properties.description}</p>
				</div>
			</div>
			<h2>Category: {properties.category.toUpperCase()}</h2>
		</div>
	);
};

export default ProductPage;
