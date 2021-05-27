import React from "react";
import "./Product.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import Zoom from "react-reveal/Zoom";
const Product = (props) => {
	return (
		<Zoom>
			<div className="product">
				<div className="tip">
					<img
						src={props.item.image}
						alt=""
						loading="lazy"
						style={{
							height: "230px",
							width: "190px",
							backgroundColor: "transparent",
						}}
					/>
					<span>{props.item.title}</span>
				</div>
				<ProductInfo item={props.item} />
			</div>
		</Zoom>
	);
};

export default Product;
