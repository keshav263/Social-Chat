import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import background from "../assets/background.png";
import Messages from "../components/Messages";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const HomePage = (props) => {
	const user = useSelector((state) => state.Auth);
	console.log(user);
	useEffect(() => {
		if (!user.isAuth) {
			return props.history.push("/");
		}
	}, [props.history, user.isAuth]);
	return (
		<>
			<Image />
			<Container>
				<SubContainer>
					<Router>
						<NavBar />
						<SideBar />
						<Switch>
							<Route path="/rooms/:roomId" component={Messages} />
							<Route path="/" component={Messages} />
						</Switch>
					</Router>
				</SubContainer>
			</Container>
		</>
	);
};

const Container = styled.div`
	background-color: #f6f7ff;
	display: flex;
	width: 100vw;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Image = styled.div`
	width: 100vw;
	position: absolute;
	height: 100vh;
	background-image: url(${background});
	background-position: center;
	background-repeat: no-repeat;
	filter: blur(50px);
	opacity: 0.2;
	background-size: contain;
`;

const SubContainer = styled.div`
	width: 85vw;
	height: 75vh;
	display: flex;
	background-color: #fefeff;
	border-radius: 2rem;
	opacity: 1;
`;

export default HomePage;
