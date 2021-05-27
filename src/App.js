import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./containers/MainPage/MainPage";

function App() {
	return (
		<div className="App">
			<NavBar />
			<MainPage />
		</div>
	);
}

export default App;
