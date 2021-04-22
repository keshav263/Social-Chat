import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import HeaderComp from "../components/Header";
import OtpInput from "react-otp-input";
import { Button, Snackbar, CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import firebase from "../firebase/firebase";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/Auth";
const OtpPage = (props) => {
	const recaptcha = useRef(null);
	const [otp, setOtp] = useState("");
	const [error, setError] = useState(false);
	const [showSnack, setShowSnack] = useState(false);
	const { state } = props.location;
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const confirmationHandler = async () => {
		if (otp.length !== 6) {
			return;
		}
		try {
			var credential = firebase.auth.PhoneAuthProvider.credential(
				window.confirmationResult.verificationId,
				otp
			);
			console.log(credential);
			await firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

			const user = await firebase.auth().signInWithCredential(credential);
			console.log(user);
			setIsLoading(true);
			await dispatch(authActions.signIn());
			setIsLoading(false);
			props.history.push("/home");
		} catch (error) {
			console.log(error);
			setIsLoading(false);

			setError(true);
		}
	};

	const signInButtonHandler = async () => {
		const phoneNumber = state;
		const editedPhoneNumber = "+91".concat(phoneNumber);
		const appVerifier = window.recaptchaVerifier;
		setIsLoading(true);
		try {
			const confirmationResult = await firebase
				.auth()
				.signInWithPhoneNumber(editedPhoneNumber, appVerifier);
			setIsLoading(false);
			setShowSnack(true);
			// console.log(confirmationResult);
			window.confirmationResult = confirmationResult;
		} catch (error) {
			window.recaptchaVerifier.render().then(function (widgetId) {
				// eslint-disable-next-line no-undef
				grecaptcha.reset(widgetId);
			});
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
				<Title>
					Enter the verification code sent to
					<br />
					{state}{" "}
				</Title>
				<Captcha ref={recaptcha}></Captcha>
				<OtpInput
					value={otp}
					onChange={setOtp}
					shouldAutoFocus={true}
					numInputs={6}
					containerStyle={{
						justifyContent: "center",
						width: "100%",
						margin: "1.5rem auto",
					}}
					inputStyle={{
						height: "3rem",
						width: "3rem",
						fontSize: "1.5rem",
						outline: "none",
						margin: "auto 0.2rem",
						borderTop: "none",
						borderLeft: "none",
						borderRight: "none",
						borderBottom: "1px solid #C9C6B5",
					}}
					focusStyle={{
						borderBottom: "1px solid #8F8D7C",
					}}
					separator={<span> </span>}
				/>
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
						onClick={confirmationHandler}
						variant="contained"
						disabled={isLoading}
						style={{
							margin: "3rem 2rem 0.5rem 2rem",
							width: "85%",
							padding: "0.5rem",
							background: "#000",
							color: "#fff",
						}}
					>
						Sign In
					</Button>
				)}
				<PolicyNote>
					By proceeding, you agree to the{" "}
					<PolicyNote
						as="span"
						style={{ color: "#ff4f25", margin: 0, fontWeight: "bold" }}
					>
						Terms of use
					</PolicyNote>{" "}
					and{" "}
					<PolicyNote
						as="span"
						style={{ color: "#ff4f25", margin: 0, fontWeight: "bold" }}
					>
						Privacy policy
					</PolicyNote>
				</PolicyNote>
				<Title as="p" style={{ textAlign: "center" }}>
					Didn't get the OTP?{" "}
					<Title
						onClick={signInButtonHandler}
						as="span"
						style={{ color: "#ff4f25", padding: 0, cursor: "pointer" }}
					>
						Resend
					</Title>
				</Title>
				<Snackbar
					open={showSnack}
					autoHideDuration={3000}
					transitionDuration={1000}
					message="The verification code was sent again!"
					onClose={() => {
						setShowSnack(false);
					}}
				/>
				<Snackbar
					open={error}
					autoHideDuration={6000}
					onClose={() => setError(false)}
				>
					<Alert onClose={() => setError(false)} severity="error">
						Invalid OTP. Try again!
					</Alert>
				</Snackbar>
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
	justify-content: center;
	margin: auto;
	height: 45vh;
	width: 45vh;
	border-radius: 2rem;
`;
const Captcha = styled.div`
	margin: 1rem auto;
`;

const Title = styled.h3`
	font-family: "Quicksand", sans-serif;
	padding: 1rem;
`;

const PolicyNote = styled.p`
	font-size: 0.8rem;
	color: #acabaa;
	width: 80%;
	font-weight: 400;
	margin: 0.5rem 2rem;
`;

const ProgressContainer = styled.div`
	width: 2rem;
	margin: 0 auto;
`;

export default OtpPage;
