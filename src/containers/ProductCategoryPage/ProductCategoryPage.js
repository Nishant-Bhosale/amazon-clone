import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
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
			{
				loading ? (
					<Spinner />
				) : (
					// (
					// 	<div className="product-category-page">
					// 		<div className="wrapper">
					// 			{products.map((product) => {
					// 				return (
					// 					<CategoryProduct
					// 						key={product.id}
					// 						item={product}
					// 						toShow={true}
					// 					/>
					// 				);
					// 			})}
					// 		</div>
					// 	</div>
					// )
					<React.Fragment>
						<ProductContainer products={products} onCategoryPage={true} />
					</React.Fragment>
				)

				// </ProductContainer>
			}
		</React.Fragment>
	);
};

export default ProductCategoryPage;
