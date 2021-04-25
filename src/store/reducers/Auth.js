import { SIGN_IN, SIGN_OUT } from "../actions/Auth";

const initialState = {
	username: "",
	email: "",
	displayPicture: "",
	isAuth: false,
	userId: "",
	setDidTryLogin: false,
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SIGN_IN: {
			return {
				isAuth: true,
				setDidTryLogin: true,
				email: action.payload.email,
				userId: action.payload.uid,
				username: action.payload.username,
				displayPicture: action.payload.displayPicture,
			};
		}
		case SIGN_OUT: {
			return initialState;
		}
		default:
			return state;
	}
}
