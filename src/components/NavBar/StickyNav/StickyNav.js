import React from "react";
import "./StickyNav.css";

const StickyNav = () => {
	return (
		<nav className="sticky-navbar">
			<div className="sticky-navbar-items">
				<div className="sticky-navbar-item">Men's Fashion</div>
				<div className="sticky-navbar-item">Computer Accessories</div>
				<div className="sticky-navbar-item">Jwellery</div>
				<div className="sticky-navbar-item">Ladies Fashion</div>
			</div>
		</nav>
	);
};

export default StickyNav;
