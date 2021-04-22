import React, { useEffect, useCallback } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as authActions from "../store/actions/Auth";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import firebase from "../firebase/firebase";

export default function InitialPage(props) {
	const dispatch = useDispatch();
	console.log(props);
	const checkAutoLogIn = useCallback(async () => {
		firebase.auth().onAuthStateChanged(async (user) => {
			console.log(user);
			if (user) {
				await dispatch(authActions.autoLogin());
				return props.history.push("home");
			} else {
				return props.history.push("get-started");
			}
		});
	}, [props.history, dispatch]);

	useEffect(() => {
		checkAutoLogIn();
	}, [checkAutoLogIn]);

	return (
		<Container>
			<CircularProgress />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
