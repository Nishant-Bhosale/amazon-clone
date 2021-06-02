import React, { useEffect, useState } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import Footer from "../../components/Footer/Footer";
import "./ProductCategoryPage.css";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const ProductCategoryPage = (props) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const productType = props.location.state.value;

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${productType}`)
			.then((result) => {
				setProducts(result.data);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
			});
	}, [productType]);

	return (
		<React.Fragment>
			{loading ? (
				<Spinner />
			) : (
				<div className="product-category-page">
					<div className="wrapper">
						{products.map((product) => {
							return (
								<CategoryProduct
									key={product.id}
									item={product}
									toShow={true}
								/>
							);
						})}
					</div>
				</div>
			)}
			<Footer />
		</React.Fragment>
	);
};

export default ProductCategoryPage;
