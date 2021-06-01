import React, { useEffect, useState } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import Footer from "../../components/Footer/Footer";
import "./ProductCategoryPage.css";
import axios from "axios";
const ProductCategoryPage = (props) => {
	const [products, setProducts] = useState([]);

	const productType = props.location.state.value;

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${productType}`)
			.then((result) => {
				setProducts(result.data);
			});
	}, [productType]);

	return (
		<React.Fragment>
			<div className="product-category-page">
				<div className="wrapper">
					{products.map((product) => {
						return (
							<CategoryProduct key={product.id} item={product} toShow={true} />
						);
					})}
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default ProductCategoryPage;
