import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";
import firebase from "../../utils/firebase";

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
	}, [props.title]);

	const postReview = () => {
		let rev = { review: textReview, title: props.title };

		axios
			.post(
				"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/reviews.json",
				rev,
			)
			.then((res) => {
				console.log(res.data);
			});
	};

	const setReviewText = (e) => {
		setTextReview(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="form-wrapper">
				<div>
					{fetchedReviews.map((review, index) => {
						return <h1 key={index}>{review}</h1>;
					})}
				</div>
				<input
					typeof="text"
					onChange={(e) => setReviewText(e)}
					placeholder="Post a review"
				/>
			</div>
			<button onClick={() => postReview()}>Post Review</button>
		</React.Fragment>
	);
};

export default Reviews;
