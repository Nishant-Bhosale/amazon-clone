import React from "react";
import CartIcon from "./CartIcon/CartIcon";
import "./ProductInfo.css";

const ProductInfo = (props) => {
	return (
		<div className="product-info">
			<div className="product-info-text">
				<p>
					<strong>Price: $</strong>
					{props.item.price}
				</p>
				<p>
					<strong>Category: </strong>
					{props.item.category.toUpperCase()}
				</p>
			</div>
			{!props.showIcon ? (
				<button className="deleteBtn" onClick={props.clicked}>
					Remove From Cart
				</button>
			) : (
				<CartIcon clicked={props.addItemToCart} />
			)}
		</div>
	);
};

export default ProductInfo;
