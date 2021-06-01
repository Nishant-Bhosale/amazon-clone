import React from "react";

const ProductImage = ({ item }) => {
	return (
		<div>
			<img
				src={item.image}
				alt=""
				title={item.title}
				style={{ height: "100%", width: "200px", marginLeft: "3rem" }}
			/>
		</div>
	);
};

export default ProductImage;
