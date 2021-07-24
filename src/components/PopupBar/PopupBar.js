import React from "react";
import "./PopupBar.css";

const PopupBar = (props) => {
	let classes = ["popup-bar"];

	if (props.success) classes.push("success");
	else if (props.fail) classes.push("fail");
	return <div className={classes.join(" ")}>{props.children}</div>;
};

export default PopupBar;
