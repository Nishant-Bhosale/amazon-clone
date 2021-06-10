const initialState = {
	userID: null,
	error: null,
	loading: false,
	success: false,
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
				loading: false,
				userID: action.userID,
				error: null,
				success: true,
			};
		case "AUTH_FAIL":
			return {
				...state,
				loading: false,
				success: false,
				error: action.errorMessage,
			};
		case "SIGN_OUT":
			return {
				...state,
				userID: null,
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
