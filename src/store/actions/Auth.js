import { firebase } from "../../firebase/firebase";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = () => {
	return async (dispatch) => {
		const user = firebase.auth().currentUser;
		let uid = user.uid;
		let displayPicture = user.photoURL;
		let username = user.displayName;
		let email = user.email;
		dispatch({
			type: SIGN_IN,
			payload: { uid, email, displayPicture, username },
		});
	};
};

export const signOut = () => {
	return async (dispatch) => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: SIGN_OUT });
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
