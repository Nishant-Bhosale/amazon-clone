import React, { useState, useEffect } from "react";
import "./signuplogin.css";
import firebase from "../../utils/firebase";
import PopupBar from "../../components/PopupBar/PopupBar";

const SignUpLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(true);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				console.log("i am here");
				console.log(user);
			} else {
				console.log("not here");
			}
		});
	}, []);

	const authenticate = (e) => {
		e.preventDefault();
		console.log("hiiiiiii");
		if (isSignUp) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((userCredentials) => {
					console.log(userCredentials.user);
				})
				.catch((err) => {
					setError("Email is already taken by someone else.");
				});
		} else {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userCredentials) => {
					console.log(userCredentials.user);
					setSuccess(true);
				})
				.catch((err) => {
					console.log(err);
					setError(err.message);
				});
		}
	};

	const changeAuthState = (e) => {
		e.preventDefault();
		setIsSignUp((prevState) => {
			return !prevState;
		});
	};

	// const signOut = (e) => {
	// 	e.preventDefault();
	// 	firebase
	// 		.auth()
	// 		.signOut()
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	const onChangeHandler = (e) => {
		e.preventDefault();
		const { name, value } = e.currentTarget;
		if (name === "email") {
			setEmail(value);
		} else if (name === "Password") {
			setPassword(value);
		}
	};

	if (error) {
		setTimeout(() => {
			setError(null);
		}, 5000);
	} else if (success) {
		setTimeout(() => {
			setSuccess(false);
		}, 3000);
	}

	return (
		<div className="signup-page">
			{success ? (
				<PopupBar success={success}>Logged In Successfully.</PopupBar>
			) : null}
			<div className="signup-card">
				<form className="signup-form" onSubmit={(e) => authenticate(e)}>
					<h1>{isSignUp ? "Sign Up" : "Log In"}</h1>

					<input
						type="email"
						placeholder="Enter Your Email"
						className="input-field"
						name="email"
						onChange={(e) => onChangeHandler(e)}
					/>
					{error ? <p style={{ color: "red" }}>{error}</p> : null}
					<input
						type="password"
						placeholder="Enter Your Password"
						className="input-field"
						name="Password"
						onChange={(e) => onChangeHandler(e)}
					/>
					<button className="auth-btn">
						{isSignUp ? "Sign Up" : "Log In"}
					</button>
				</form>
				<button className="auth-btn" onClick={(e) => changeAuthState(e)}>
					Switch To {isSignUp ? "Log In" : "Sign Up"}
				</button>
			</div>
		</div>
	);
};

export default SignUpLogin;
