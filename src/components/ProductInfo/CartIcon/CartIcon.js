import React from "react";
import "./CartIcon.css";

const CartIcon = (props) => {
	return (
		<img
			src="https://img.icons8.com/ios-filled/30/000000/shopping-cart-loaded--v2.png"
			alt=""
			title="Add to Cart"
			className="cart-icon"
			onClick={props.clicked}
		/>
	);
};

export default CartIcon;
