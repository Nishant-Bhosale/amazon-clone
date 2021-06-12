import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
const Modal = (props) => {
	// const [showMovie, setShowMovie] = useState(false);

	return (
		<React.Fragment>
			<Backdrop
				clicked={() => {
					props.toggleModal();
				}}
			/>
			<div className="modal">{props.children}</div>
		</React.Fragment>
	);
};

export default Modal;
