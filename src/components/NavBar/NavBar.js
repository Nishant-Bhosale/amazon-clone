import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { connect } from "react-redux";
import StickyNav from "./StickyNav/StickyNav";
import * as actions from "../../store/actions/actions";

const NavBar = (props) => {
	return (
		<React.Fragment>
			<div>
				<nav className="navbar">
					<Link className="brand-logo" to="/">
						Amazon
					</Link>
					<div className="navigation-items">
						{props.isAuth ? (
							<button onClick={props.signUserOut} className="signout-btn">
								LogOut
							</button>
						) : (
							<Link className="navigation-item" to="/authenticate">
								SignUp/Login
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
