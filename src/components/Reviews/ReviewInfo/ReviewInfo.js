import React from "react";
import "./ReviewInfo.css";
const ReviewInfo = ({ reviews }) => {
	return (
		<React.Fragment>
			{reviews.map((review, index) => {
				return (
					<div key={index} className="review-text-wrapper">
						<h3>Review By: </h3>
						<p className="review-text">{review}</p>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default ReviewInfo;
