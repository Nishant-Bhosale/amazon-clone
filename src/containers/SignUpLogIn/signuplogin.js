import React, { useState } from "react";
import "./signuplogin.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

const SignUpLogin = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [isSignUp, setIsSignUp] = useState(true);

	const authenticate = (e) => {
		e.preventDefault();
		props.authenticateUser(email, password, isSignUp, name);
	};

	const changeAuthState = (e) => {
		e.preventDefault();
		setIsSignUp((prevState) => {
			return !prevState;
		});
	};

	const onChangeHandler = (e) => {
		e.preventDefault();
		const { name, value } = e.currentTarget;
		if (name === "email") {
			setEmail(value);
		} else if (name === "Password") {
			setPassword(value);
		} else if (name === "display-name") {
			setName(value);
		}
	};

	if (props.success) {
		setTimeout(() => {
			props.setSuccessState();
		}, 3000);
	}

	return (
		<div className="signup-page">
			{props.success ? <div>{props.history.push("/")}</div> : null}
			<div className="signup-card">
				<form className="signup-form" onSubmit={(e) => authenticate(e)}>
					<h1>{isSignUp ? "Sign Up" : "Log In"}</h1>
					{isSignUp ? (
						<input
							type="text"
							placeholder="Enter Your Name"
							className="input-field"
							name="display-name"
							required
							onChange={(e) => onChangeHandler(e)}
						/>
					) : null}

					<input
						type="email"
						placeholder="Enter Your Email"
						className="input-field"
						required
						name="email"
						onChange={(e) => onChangeHandler(e)}
					/>
					{props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
					<input
						type="password"
						placeholder="Enter Your Password"
						className="input-field"
						name="Password"
						required
						minLength="7"
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
const mapStateToProps = (state) => {
	return {
		error: state.error,
		success: state.success,
		userID: state.userID,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authenticateUser: (email, password, isSignUp, name) =>
			dispatch(actions.auth(email, password, isSignUp, name)),
		setSuccessState: () => dispatch(actions.setAuthSuccessState()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpLogin);
