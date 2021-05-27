import React from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import "./CategoryProduct.css";
import Slide from "react-reveal/Slide";
const CategoryProduct = (props) => {
	return (
		<Slide left>
			<div className="horizontal-product">
				<div>
					<img
						src={props.item.image}
						alt=""
						title={props.item.title}
						style={{ height: "100%", width: "200px", marginLeft: "3rem" }}
					/>
				</div>
				<div className="product-info-wrapper">
					<p>{props.item.title}</p>
					<ProductInfo item={props.item} />
				</div>
			</div>
		</Slide>
	);
};

export default CategoryProduct;
