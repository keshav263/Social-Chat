import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HeaderComp from "../components/Header";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import firebase from "../firebase/firebase";

const SignInPage = (props) => {
	const recaptcha = useRef(null);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const signInButtonHandler = async () => {
		if (phoneNumber.length !== 10) {
			setError(true);
			return;
		}
		const editedPhoneNumber = "+91".concat(phoneNumber);
		const appVerifier = window.recaptchaVerifier;
		setIsLoading(true);
		try {
			const confirmationResult = await firebase
				.auth()
				.signInWithPhoneNumber(editedPhoneNumber, appVerifier);
			setIsLoading(false);

			window.confirmationResult = confirmationResult;
			props.history.push({
				pathname: "/sign-in-otp",
				state: phoneNumber,
			});
		} catch (error) {
			console.log(error);
			window.recaptchaVerifier.render().then(function (widgetId) {
				// eslint-disable-next-line no-undef
				grecaptcha.reset(widgetId);
			});
			setIsLoading(false);
		}
	};
	useEffect(() => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
			recaptcha.current,
			{
				size: "invisible",
				callback: function (response) {},
			}
		);
	}, []);

	return (
		<Container>
			<HeaderComp />

			<SubContainer>
				<Title>Login to continue</Title>
				<Animation>
					<lottie-player
						src="https://assets5.lottiefiles.com/private_files/lf30_oi23m99t.json"
						mode="normal"
						background="#fff"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</Animation>
				<TextField
					required={true}
					error={error}
					type="text"
					label="Phone Number"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					variant="outlined"
					style={{ width: "100%" }}
					inputProps={{ maxLength: 10, minLength: 10 }}
					helperText={
						error
							? "Must be 10-digit number"
							: "We will be sending a one time password."
					}
				/>

				<Captcha ref={recaptcha}></Captcha>
				{isLoading ? (
					<ProgressContainer>
						<CircularProgress
							size="small"
							style={{
								// display: "flex",
								// alignItems: "center",
								// justifyContent: "center",
								width: "2rem",
								height: "2rem",
								margin: "0 auto",
							}}
						/>
					</ProgressContainer>
				) : (
					<Button
						variant="contained"
						onClick={signInButtonHandler}
						style={{
							margin: "1rem auto",
							width: "100%",
							background: "#000",
							color: "#fff",
						}}
					>
						Continue
					</Button>
				)}
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
`;

const Title = styled.h3`
	font-family: "Quicksand", sans-serif;
`;
const Animation = styled.div`
	height: 10rem;
	width: 10rem;
	margin: auto;
`;
const Captcha = styled.div`
	margin: 1rem auto;
`;

const ProgressContainer = styled.div`
	width: 2rem;
	margin: 0 auto;
`;

export default SignInPage;
