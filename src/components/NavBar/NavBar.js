import React from "react";
import "./NavBar.css";
import StickyNav from "./StickyNav/StickyNav";
const NavBar = () => {
	return (
		<React.Fragment>
			<div>
				<nav className="navbar">
					<div className="brand-logo">Amazon</div>
					<div className="navigation-items">
						<div className="navigation-item">Your Address</div>
						<div className="navigation-item">Authentication</div>
						<div className="navigation-item">Cart</div>
					</div>
				</nav>
			</div>
			<StickyNav />
		</React.Fragment>
	);
};

export default NavBar;
