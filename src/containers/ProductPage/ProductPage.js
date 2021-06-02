import React from "react";
import Footer from "../../components/Footer/Footer";
import ProductImage from "../../components/ProductUI/ProductImage/ProductImage";
import PostReview from "../../components/Reviews/Reviews";
import "./ProductPage.css";

const ProductPage = (props) => {
	const properties = props.location.state.value;

	return (
		<React.Fragment>
			<div className="product-page-wrapper">
				<h1 style={{ fontSize: "3rem", fontFamily: "Helvetica" }}>
					{properties.title}
				</h1>
				<section className="product-description">
					<ProductImage item={properties} title={properties} />
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
			<Footer />
		</React.Fragment>
	);
};

export default ProductPage;
