import React from "react";
import "./PopupBar.css";
const PopupBar = (props) => {
	return <div className="popup-bar">{props.children}</div>;
};

export default PopupBar;
