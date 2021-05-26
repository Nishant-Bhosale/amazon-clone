import React from "react";
import Product from "../Product/Product";
import "./ProductContainer.css";

const ProductContainer = (props) => {
	return (
		<React.Fragment>
			{/* <div className="bg-image"></div> */}
			<div className="product-container">
				<img
					src={`${process.env.PUBLIC_URL}/images/bgimage.jpg`}
					alt=""
					className="img"
				/>
				{props.products.map((product) => {
					return <Product key={product.id} item={product} />;
				})}
			</div>
		</React.Fragment>
	);
};

export default ProductContainer;
