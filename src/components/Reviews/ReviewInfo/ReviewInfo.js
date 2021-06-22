import React from "react";
import "./ReviewInfo.css";

const ReviewInfo = (props) => {
	return (
		<React.Fragment>
			{props.reviews.map((review, index) => {
				return (
					<div key={index} className="review-text-wrapper">
						<h4>Review By: {review.displayName}</h4>
						<p className="review-text">{review.review}</p>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default ReviewInfo;
