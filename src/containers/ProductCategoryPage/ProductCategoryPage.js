import React, { useEffect } from "react";
import axios from "axios";
import "./ProductCategoryPage.css";

const ProductCategoryPage = (props) => {
	const productType = props.location.state.value;
	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${productType}`)
			.then((result) => {
				console.log(result);
			});
	});
	return (
		<div>
			<h1>CategoryPage</h1>
		</div>
	);
};

export default ProductCategoryPage;
