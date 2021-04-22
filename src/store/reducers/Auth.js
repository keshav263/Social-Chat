import { SIGN_IN } from "../actions/Auth";

const initialState = {
	username: "",
	phoneNumber: "",
	photoUrl: "",
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
				phoneNumber: action.payload.phoneNumber,
				userId: action.payload.uid,
				username: action.payload.username,
				photoUrl: action.payload.photoUrl,
			};
		}
		default:
			return state;
	}
}
