import React from "react";
import "./PopupBar.css";
import Fade from "react-reveal/Fade";
const PopupBar = (props) => {
	return (
		<Fade>
			<div className="popup-bar">{props.children}</div>
		</Fade>
	);
};

export default PopupBar;
