import React from "react";
import "./ProductInfo.css";

const ProductInfo = (props) => {
	return (
		<div className="product-info">
			<div>
				<p>
					<strong>Price: $</strong>
					{props.item.price}
				</p>
				<p>
					<strong>Category: </strong>
					{props.item.category.toUpperCase()}
				</p>
			</div>

			<img
				src="https://img.icons8.com/ios-filled/30/000000/shopping-cart-loaded--v2.png"
				alt=""
				title="Add to Cart"
				className="cart-icon"
				style={{ height: "30px" }}
			/>
		</div>
	);
};

export default ProductInfo;
