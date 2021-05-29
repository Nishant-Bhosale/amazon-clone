import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import StickyNav from "./StickyNav/StickyNav";
const NavBar = () => {
	return (
		<React.Fragment>
			<div>
				<nav className="navbar">
					<Link className="brand-logo" to="/">
						Amazon
					</Link>
					<div className="navigation-items">
						<div className="navigation-item">Your Address</div>
						<div className="navigation-item">Authentication</div>
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

export default NavBar;
