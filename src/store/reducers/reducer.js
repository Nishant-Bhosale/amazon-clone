const initialState = {
	token: null,
	userID: null,
	error: null,
	loading: true,
	success: false,
	userName: null,
	userCart: null,
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
		case "FETCH_USERCART":
			return {
				...state,
				loading: false,
				userCart: action.userCart,
			};
		case "REMOVE_ITEM":
			return {
				...state,
				userCart: state.userCart.filter((cartProduct) => {
					return action.id !== cartProduct.id;
				}),
			};
		default:
			return state;
	}
};

export default reducer;
