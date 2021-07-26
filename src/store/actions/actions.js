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

export const authSuccess = (userID, name, token) => {
	return {
		type: "AUTH_SUCCESS",
		userID: userID,
		name: name,
		token: token,
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

		firebase.auth().signOut();

		window.location.reload();
	};
};

export const setUserCart = (cart) => {
	return {
		type: "FETCH_USERCART",
		userCart: cart,
	};
};

export const fetchUserCart = (userID) => {
	const dbRef = firebase.database().ref();
	return (dispatch) => {
		dbRef
			.child("cart")
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) {
					const cart = [];

					for (let key in snapshot.val()) {
						cart.push({
							...snapshot.val()[key],
							id: key,
						});
					}

					const filteredCart = cart.filter((cartProduct) => {
						return userID === cartProduct.userID;
					});

					console.log(filteredCart);

					dispatch(setUserCart(filteredCart));
				}
			});
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
					const { user } = userCredentials;

					dispatch(authSuccess(user.uid, name, user.za));

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
					const { user } = userCredentials;

					dispatch(authSuccess(user.uid, user.displayName, user.za));
				})
				.catch((error) => {
					dispatch(authFail(error.message));
				});
		}
	};
};
