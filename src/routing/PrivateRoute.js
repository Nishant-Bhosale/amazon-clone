import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
	const isAuthenticated = isAuth;
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated ? (
					<Redirect to="/authenticate" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.userID !== null,
	};
};

export default connect(mapStateToProps)(PrivateRoute);
