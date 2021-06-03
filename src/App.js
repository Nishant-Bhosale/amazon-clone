import React from "react";
import ProductCategoryPage from "./containers/ProductCategoryPage/ProductCategoryPage";
import MainPage from "./containers/MainPage/MainPage";
import UserCart from "./containers/UserCart/UserCart";
import ProductPage from "./containers/ProductPage/ProductPage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import SignUpLogin from "./containers/SignUpLogIn/signuplogin";
function App() {
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
}

export default App;
