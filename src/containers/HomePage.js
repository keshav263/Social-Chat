import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderComp from "../components/Header";
const HomePage = (props) => {
	const user = useSelector((state) => state.Auth);
	console.log(user);
	useEffect(() => {
		if (!user.isAuth) {
			return props.history.push("/");
		}
	}, [props.history, user.isAuth]);
	return (
		<Container>
			<HeaderComp />
		</Container>
	);
};

const Container = styled.div`
	background-color: #eeece7;
	display: flex;
	width: 100vw;
	height: 100vh;
`;

export default HomePage;
