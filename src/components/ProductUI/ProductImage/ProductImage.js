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
					loading="lazy"
					style={{ height: "100%", width: "200px", marginLeft: "3rem" }}
				/>
			</div>
		</Link>
	);
};

export default ProductImage;
