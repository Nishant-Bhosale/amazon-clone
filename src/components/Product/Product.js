import React from "react";
import "./Product.css";
const Product = (props) => {
	return (
		<div className="product">
			<img
				src={props.item.image}
				alt=""
				style={{
					height: "230px",
					width: "190px",
					backgroundColor: "transparent",
				}}
			/>
			<div className="product-info">
				<p>
					<strong>Price: $</strong>
					{props.item.price}
				</p>
				<p>
					<strong>Category: </strong>
					{props.item.category.toUpperCase()}
				</p>
			</div>
		</div>
	);
};

export default Product;
