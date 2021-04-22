import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Pic from "../assets/main-page.png";

import { useSelector } from "react-redux";
import HeaderComp from "../components/Header";

const MainPage = (props) => {
	const isAuth = useSelector((state) => state.Auth.isAuth);
	const buttonHandler = () => {
		props.history.push("/sign-in");
	};

	return (
		<Container>
			<HeaderComp />
			<MainWrapper>
				<TextContainer>
					<Title>
						Stay <HighlightedTitle as="span"> COOL!</HighlightedTitle> With
						Social Chat
					</Title>
					<SubTitle>
						Anyone willing to get acquainted and communicate can get started for
						free and use it without limits
					</SubTitle>
					<Button
						variant="contained"
						color="primary"
						onClick={buttonHandler}
						style={{
							width: "10rem",
							borderRadius: "0.6rem",
							margin: 0,
							backgroundColor: "#000",
							padding: "0.5rem",
						}}
					>
						{isAuth ? "Continue" : "Get Started"}
					</Button>
				</TextContainer>
				<PicContainer>
					<Image src={Pic} />
				</PicContainer>
			</MainWrapper>
		</Container>
	);
};

const Container = styled.div``;

const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;

	height: 100vh;
	width: 100vw;
`;

const TextContainer = styled.div`
	display: flex;
	padding: 0rem 2rem 0rem 4rem;
	flex-direction: column;
	justify-content: center;
	width: 50vw;
	height: 100vh;
`;

const Title = styled.h1`
	font-family: "Quicksand", sans-serif;
	margin: 0;
	font-size: 5rem;
`;

const HighlightedTitle = styled(Title)`
	font-family: "Titan One";
	color: #ff4f25;
`;

const SubTitle = styled.h3`
	font-size: 0.8rem;
	color: #acabaa;
	width: 80%;
	font-weight: 400;
	margin: 2rem 0;
`;

const PicContainer = styled.div`
	background-color: #efece8;
	width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Image = styled.img`
	background-size: cover;

	background-repeat: no-repeat;
`;
export default MainPage;
