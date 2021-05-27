import React from "react";
import "./StickyNav.css";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
const StickyNav = () => {
	return (
		<nav className="sticky-navbar">
			<div className="sticky-navbar-items">
				<CustomNavLink categoryName="men's clothing">
					Mens Clothing
				</CustomNavLink>
				<CustomNavLink categoryName="electronics">Electronics</CustomNavLink>
				<CustomNavLink categoryName="jewelery">Jewelery</CustomNavLink>
				<CustomNavLink categoryName="women's clothing">
					Womens Fashion
				</CustomNavLink>
			</div>
		</nav>
	);
};

export default StickyNav;
