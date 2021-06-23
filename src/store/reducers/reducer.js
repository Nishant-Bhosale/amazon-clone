const initialState = {
	token: null,
	userID: null,
	error: null,
	loading: true,
	success: false,
	userName: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "AUTH_START":
			return {
				loading: true,
				...state,
			};
		case "AUTH_SUCCESS":
			return {
				token: action.token,
				loading: false,
				userID: action.userID,
				error: null,
				success: true,
				userName: action.name,
			};
		case "AUTH_FAIL":
			return {
				...state,
				token: null,
				loading: false,
				success: false,
				error: action.errorMessage,
				userName: null,
			};
		case "SIGN_OUT":
			return {
				...state,
				userID: null,
				token: null,
				userName: null,
			};
		case "SET_SUCCESS":
			return {
				...state,
				success: false,
			};
		default:
			return state;
	}
};

export default reducer;
