import React from "react";
import "./signuplogin.css";
const SignUpLogin = () => {
	return (
		<div className="signup-page">
			<div className="signup-card">
				<form className="signup-form">
					<h1>SignUp / Login Form</h1>
					<input
						type="text"
						placeholder="Enter Your Name"
						className="input-field"
					/>
					<input
						type="email"
						placeholder="Enter Your Email"
						className="input-field"
					/>
					<input
						type="password"
						placeholder="Enter Your Password"
						className="input-field"
					/>
					<button className="auth-btn">Login/SignUp</button>
				</form>
			</div>
		</div>
	);
};

export default SignUpLogin;
