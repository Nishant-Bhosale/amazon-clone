import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCategoryPage.css";

const ProductCategoryPage = (props) => {
	const [products, setProducts] = useState([]);
	const productType = props.location.state.value;
	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${productType}`)
			.then((result) => {
				console.log(result);
				setProducts(result.data);
			});
	});
	return (
		<div>
			{products.map((product) => {
				return <h3>{product.title}</h3>;
			})}
		</div>
	);
};

export default ProductCategoryPage;
