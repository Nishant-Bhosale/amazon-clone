import firebase from "../../utils/firebase";

export const authStart = () => {
	return {
		type: "AUTH_START",
	};
};

export const authFail = (message) => {
	return {
		type: "AUTH_FAIL",
		errorMessage: message,
	};
};

export const authSuccess = (userID) => {
	return {
		type: "AUTH_SUCCESS",
		userID: userID,
	};
};

export const signOutHandler = () => {
	return {
		type: "SIGN_OUT",
	};
};

export const setAuthSuccessState = () => {
	return {
		type: "SET_SUCCESS",
	};
};

export const signOut = () => {
	return (dispatch) => {
		dispatch(signOutHandler());
		console.log("singjsofj");
		firebase.auth().signOut();
	};
};

export const auth = (email, password, isSignUp) => {
	return (dispatch) => {
		dispatch(authStart());
		if (isSignUp) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((userCredentials) => {
					console.log(userCredentials.uid);

					dispatch(authSuccess(userCredentials.uid));
				})
				.catch((error) => {
					dispatch(authFail(error.message));
					console.log(error);
				});
		} else {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userCredentials) => {
					console.log(userCredentials.user);
					dispatch(authSuccess(userCredentials.user.uid));
				})
				.catch((error) => {
					console.log(error);
					dispatch(authFail(error.message));
				});
		}
	};
};
