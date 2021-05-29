import React from "react";

const ProductImage = (props) => {
	return (
		<div>
			<img
				src={props.item.image}
				alt=""
				title={props.item.title}
				style={{ height: "100%", width: "200px", marginLeft: "3rem" }}
			/>
		</div>
	);
};

export default ProductImage;
