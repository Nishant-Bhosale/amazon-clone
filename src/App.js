import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./containers/MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import ProductCategoryPage from "./containers/ProductCategoryPage/ProductCategoryPage";
import UserCart from "./containers/UserCart/UserCart";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/category" component={ProductCategoryPage} />
				<Route path="/mycart" component={UserCart} />
				{/* <Route component={Error} /> */}
			</Switch>
		</div>
	);
}

export default App;
