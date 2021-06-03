import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";
import firebase from "../../utils/firebase";
import ReviewInfo from "./ReviewInfo/ReviewInfo";

const Reviews = (props) => {
	const [textReview, setTextReview] = useState("");
	const [fetchedReviews, setFetchedReviews] = useState([]);

	useEffect(() => {
		const reviews = firebase.database().ref("reviews/");
		let arr = [];
		reviews
			.orderByChild("title")
			.equalTo(props.title)
			.on("child_added", (snap) => {
				arr.push(snap.val().review);
				setFetchedReviews(arr);
			});
	}, [props.title, fetchedReviews]);

	const postReview = () => {
		let rev = { review: textReview, title: props.title };

		axios
			.post(
				"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/reviews.json",
				rev,
			)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		setTextReview("");
	};

	const setReviewText = (e) => {
		setTextReview(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="form-wrapper">
				<h1 style={{ marginLeft: "3rem", fontSize: "3rem" }}>Reviews</h1>
				<div className="review-input-wrapper">
					<span>
						<input
							typeof="text"
							// value={textReview}
							onChange={(e) => setReviewText(e)}
							placeholder="Post a review"
							className="review-input"
						/>
					</span>

					<span>
						<button onClick={() => postReview()} className="post-review-btn">
							Post Review
						</button>
					</span>

					<div className="review-card">
						<h2>Other Reviews:</h2>
						{!fetchedReviews.length <= 0 ? (
							<ReviewInfo reviews={fetchedReviews} />
						) : (
							<h2 style={{ textAlign: "left" }}>
								No Reviews Found for {props.title}
							</h2>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Reviews;
