import React from "react";
import "./ProductImage.css";
import { Link } from "react-router-dom";

const ProductImage = ({ item }) => {
	return (
		<Link to={{ pathname: "/productinfopage", state: { value: item } }}>
			<div>
				<img
					src={item.image}
					alt=""
					title={item.title}
					className="product-img"
				/>
			</div>
		</Link>
	);
};

export default ProductImage;
