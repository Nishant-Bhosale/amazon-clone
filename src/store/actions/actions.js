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

export const authSuccess = (userID, name) => {
	return {
		type: "AUTH_SUCCESS",
		userID: userID,
		name: name,
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

export const auth = (email, password, isSignUp, name) => {
	return (dispatch) => {
		dispatch(authStart());
		if (isSignUp) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((userCredentials) => {
					dispatch(authSuccess(userCredentials.uid, name));

					return userCredentials.user.updateProfile({
						displayName: name,
					});
				})
				.catch((error) => {
					dispatch(authFail(error.message));
				});
		} else {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userCredentials) => {
					console.log(userCredentials);
					dispatch(
						authSuccess(userCredentials.user.uid, userCredentials.displayName),
					);
				})
				.catch((error) => {
					dispatch(authFail(error.message));
				});
		}
	};
};
