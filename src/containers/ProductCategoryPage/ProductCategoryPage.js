import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCategoryPage.css";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
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
		<div className="product-category-page">
			<div className="wrapper">
				{products.map((product) => {
					return <CategoryProduct key={product.id} item={product} />;
				})}
			</div>
		</div>
	);
};

export default ProductCategoryPage;
