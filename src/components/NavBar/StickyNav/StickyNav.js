import React from "react";
import "./StickyNav.css";
import { Link } from "react-router-dom";
const StickyNav = () => {
	return (
		<nav className="sticky-navbar">
			<div className="sticky-navbar-items">
				<div>
					<Link
						className="sticky-navbar-item"
						to={{
							pathname: "/category",
							state: {
								value: "menclothing",
							},
						}}
					>
						Men's Fashion
					</Link>
				</div>

				<div>
					<Link
						className="sticky-navbar-item"
						to={{
							pathname: "/category",
							state: {
								value: "electronics",
							},
						}}
					>
						Computer Accessories
					</Link>
				</div>
				<div>
					<Link
						className="sticky-navbar-item"
						to={{
							pathname: "/category",
							state: {
								value: "jewelery",
							},
						}}
					>
						Jwellery
					</Link>
				</div>
				<div>
					<Link
						className="sticky-navbar-item"
						to={{
							pathname: "/category",
							state: {
								value: "women'sclothing",
							},
						}}
					>
						Ladies Fashion
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default StickyNav;
