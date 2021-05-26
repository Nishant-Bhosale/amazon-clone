import React from "react";

const Product = (props) => {
	return (
		<div>
			<h3>{props.item.title}</h3>
			<img
				src={props.item.image}
				alt=""
				style={{
					height: "300px",
					width: "250px",
					border: "2px solid black",
				}}
			/>
		</div>
	);
};

export default Product;
