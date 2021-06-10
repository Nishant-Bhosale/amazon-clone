import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { connect } from "react-redux";
import firebase from "../../utils/firebase";
import StickyNav from "./StickyNav/StickyNav";
import * as actions from "../../store/actions/actions";

const NavBar = (props) => {
	// const signOut = () => {
	// 	firebase
	// 		.auth()
	// 		.signOut()
	// 		.then((res) => {
	// 			console.log(res);
	// 		});
	// };

	return (
		<React.Fragment>
			<div>
				<nav className="navbar">
					<Link className="brand-logo" to="/">
						Amazon
					</Link>
					<div className="navigation-items">
						<div className="navigation-item">Your Address</div>
						{props.isAuth ? (
							<button onClick={props.signUserOut}>SignOut</button>
						) : (
							<Link className="navigation-item" to="/authenticate">
								Authentication
							</Link>
						)}

						<Link className="navigation-item" to="/mycart">
							Cart
						</Link>
					</div>
				</nav>
			</div>
			<StickyNav />
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.userID !== null,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUserOut: () => dispatch(actions.signOut()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
