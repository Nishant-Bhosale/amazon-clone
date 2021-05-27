import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavLink.css";

const CustomNavLink = ({ categoryName, children }) => {
	return (
		<div>
			<Link
				className="sticky-navbar-item"
				to={{
					pathname: "/category",
					state: {
						value: categoryName,
					},
				}}
			>
				{children}
			</Link>
		</div>
	);
};

export default CustomNavLink;
