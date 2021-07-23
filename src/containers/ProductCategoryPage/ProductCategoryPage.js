import React, { useEffect, useState } from "react";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const ProductCategoryPage = (props) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const productType = props.location.state.value;

	useEffect(() => {
		async function fetchData() {
			try {
				const results = await axios.get(
					`https://fakestoreapi.com/products/category/${productType}`,
				);

				setProducts(results.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		}

		fetchData();
	}, [productType]);

	return (
		<React.Fragment>
			{
				loading ? (
					<Spinner />
				) : (
					<React.Fragment>
						<ProductContainer
							products={products}
							onCategoryPage={true}
							toShow={true}
						/>
					</React.Fragment>
				)

				// </ProductContainer>
			}
		</React.Fragment>
	);
};

export default ProductCategoryPage;
