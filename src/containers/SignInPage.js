import React from "react";
import styled from "styled-components";
import HeaderComp from "../components/Header";
import { Button } from "@material-ui/core";
import { provider, firebase } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as authActions from "../store/actions/Auth";

const SignInPage = (props) => {
	const dispatch = useDispatch();
	const signInButtonHandler = async () => {
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				firebase
					.auth()
					.signInWithPopup(provider)
					.then((result) => {
						dispatch(authActions.signIn());
						props.history.push("/home");
					})
					.catch((err) => alert(err.message));
			});
	};

	return (
		<Container>
			<HeaderComp />

			<SubContainer>
				<Title>Login to continue</Title>
				<Animation>
					<lottie-player
						src="https://assets7.lottiefiles.com/packages/lf20_QpolL2.json"
						mode="normal"
						background="#fff"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</Animation>
				<StyledButton
					color="primary"
					variant="contained"
					startIcon={<FavoriteIcon />}
					onClick={signInButtonHandler}
				>
					Sign In With Google
				</StyledButton>
			</SubContainer>
		</Container>
	);
};

const Container = styled.div`
	background-color: #eeece7;
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const SubContainer = styled.div`
	background-color: #fff;
	padding: 2rem;
	align-self: center;
	margin: auto;
	height: 45vh;
	width: 45vh;
	border-radius: 2rem;
	@media (max-width: 512px) {
		width: 35vh;
		height: 35vh;
	}
	@media (max-width: 380px) {
		width: 30vh;
		height: 30vh;
	}
`;

const Title = styled.h3`
	font-family: "Quicksand", sans-serif;
`;
const Animation = styled.div`
	height: 15rem;
	width: 15rem;
	margin: auto;
	@media (max-width: 512px) {
		width: 10rem;
		height: 10rem;
	}
`;
const StyledButton = styled(Button)`
	width: 100%;
	margin: 1rem;
`;

export default SignInPage;
