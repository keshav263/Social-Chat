import firebase from "../../firebase/firebase";
export const SIGN_IN = "SIGN_IN";

export const autoLogin = () => {
	return async (dispatch) => {
		var db = firebase.firestore();
		const user = firebase.auth().currentUser;
		let uid = user.uid;
		let phoneNumber = user.phoneNumber;
		let username = "";
		let photoUrl = "";
		if (user) {
			const doc = await db.collection("profile").doc(uid).get();
			// console.log(doc.data());
			username = doc.data().username;
			photoUrl = doc.data().photoUrl;
			dispatch({
				type: SIGN_IN,
				payload: {
					uid,
					phoneNumber,
					username,
					photoUrl,
				},
			});
		}
	};
};

export const signIn = () => {
	return async (dispatch) => {
		var db = firebase.firestore();
		const user = firebase.auth().currentUser;
		// const { uid, phoneNumber } = user;
		let uid = user.uid;
		let phoneNumber = user.phoneNumber;
		let username = "";
		let photoUrl = "";
		try {
			const docSnapshot = await db.collection("profile").doc(uid).get();
			if (!docSnapshot.exists) {
				await db
					.collection("profile")
					.doc(uid)
					.set({ phoneNumber, username, photoUrl });
			} else {
				const doc = await db.collection("profile").doc(uid).get();
				// console.log(doc.data());
				username = doc.data().username;
				photoUrl = doc.data().photoUrl;
			}
			dispatch({
				type: SIGN_IN,
				payload: {
					uid,
					phoneNumber,
					username,
					photoUrl,
				},
			});
		} catch (error) {
			throw new Error();
		}
	};
};
