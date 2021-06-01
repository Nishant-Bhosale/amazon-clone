import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer-wrapper">
			<h1>Contact Me</h1>

			<div class="contacts-container">
				<div className="email-info">
					<h3>Created By: Nishant Bhosale</h3>
					<p>nishantbhosale244@gmail.com</p>
				</div>
				<div class="links-container">
					<a
						href="https://www.linkedin.com/in/nishant-bhosale-6777241b6"
						className="links"
					>
						LinkedIn
					</a>
					<a href="https://github.com/Nishant-Bhosale" className="links">
						Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
