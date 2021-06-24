import React, { useEffect } from "react";
import ProductCategoryPage from "./containers/ProductCategoryPage/ProductCategoryPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import SignUpLogin from "./containers/SignUpLogIn/signuplogin";
import MainPage from "./containers/MainPage/MainPage";
import UserCart from "./containers/UserCart/UserCart";
import { Route, Switch } from "react-router-dom";
import firebase from "./utils/firebase";
import { connect } from "react-redux";
import * as actions from "./store/actions/actions";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = (props) => {
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				props.authSuccess(user.uid, user.displayName, user.za);
			}
		});
	}, [props]);

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/authenticate" exact component={SignUpLogin} />
				<Route path="/category" component={ProductCategoryPage} />
				<Route path="/mycart" component={UserCart} />
				<Route path="/productinfopage" component={ProductPage} />
				{/* <Route component={Error} /> */}
			</Switch>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.token !== null,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authSuccess: (id, name, token) =>
			dispatch(actions.authSuccess(id, name, token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
