import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";
import firebase from "../../utils/firebase";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
				arr.push(snap.val());
				setFetchedReviews(arr);
			});
	}, [props]);

	const postReview = () => {
		let rev = {
			review: textReview,
			title: props.title,
			displayName: props.name,
		};

		console.log(props);
		axios.post(
			"https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com/reviews.json",
			rev,
		);
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
					{props.isAuth ? (
						<div>
							<span>
								<input
									typeof="text"
									onChange={(e) => setReviewText(e)}
									placeholder="Post a review"
									required
									className="review-input"
								/>
							</span>

							<span>
								<button
									onClick={() => postReview()}
									className="post-review-btn"
								>
									Post Review
								</button>
							</span>
						</div>
					) : (
						<Link to="/authenticate">SIGN IN OR SIGN UP TO POST A REVIEW!</Link>
					)}

					<div className="review-card">
						<h2>Reviews:</h2>
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

const mapStateToProps = (state) => {
	return {
		isAuth: state.userID !== null,
		name: state.userName,
	};
};

export default connect(mapStateToProps)(Reviews);
