import React from "react";
import PostReview from "../../components/Reviews/Reviews";
import "./ProductPage.css";

const ProductPage = (props) => {
	const properties = props.location.state.value;
	console.log(properties);
	return (
		<React.Fragment>
			<div className="product-page-wrapper">
				<h1 className="product-heading">{properties.title}</h1>
				<section className="product-description">
					<img src={properties.image} className="product-page-image" alt="" />
					<div className="description-wrapper">
						<p>{properties.description}</p>
					</div>
				</section>
				<h2>
					<em>
						Category:
						<span style={{ color: "purple" }}>
							{"  " + properties.category.toUpperCase()}
						</span>
					</em>
					<div>
						<em> Price: $ {properties.price}</em>
					</div>
				</h2>
				<PostReview title={properties.title} />
			</div>
		</React.Fragment>
	);
};

export default ProductPage;
