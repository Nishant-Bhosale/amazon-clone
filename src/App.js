import React, { useEffect } from "react";
import ProductCategoryPage from "./containers/ProductCategoryPage/ProductCategoryPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import SignUpLogin from "./containers/SignUpLogIn/signuplogin";
import AddressPage from "./containers/AddressPage/AddressPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";
import MainPage from "./containers/MainPage/MainPage";
import UserCart from "./containers/UserCart/UserCart";
import PrivateRoute from "./routing/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import firebase from "./utils/firebase";
import { connect } from "react-redux";
import * as actions from "./store/actions/actions";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = (props) => {
	const { userID, authSuccess } = props;

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				authSuccess(user.uid, user.displayName, user.za);
			}
		});
	}, [userID, authSuccess]);

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/authenticate" exact component={SignUpLogin} />
				<Route path="/category" component={ProductCategoryPage} />
				<Route path="/mycart" component={UserCart} />
				<Route path="/productinfopage" component={ProductPage} />
				<PrivateRoute path="/address" component={AddressPage} />
				<PrivateRoute path="/myorders" component={OrdersPage} />
				{/* <Route component={Error} /> */}
			</Switch>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.token !== null,
		userID: state.userID,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authSuccess: (id, name, token) =>
			dispatch(actions.authSuccess(id, name, token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
