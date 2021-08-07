import React from "react";
import "./PopupBar.css";
import { Fade } from "react-reveal";

const PopupBar = (props) => {
	let classes = ["popup-bar"];

	if (props.success) classes.push("success");
	else if (props.fail) classes.push("fail");
	return (
		<Fade>
			<div className={classes.join(" ")}>{props.children}</div>
		</Fade>
	);
};

export default PopupBar;
