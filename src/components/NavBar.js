import React from "react";
import styled from "styled-components";
import Profile from "./NavBar/Profile";

import Items from "./NavBar/Items";
function NavBar() {
	return (
		<Container>
			<Title>
				<Title style={{ color: " #ff4f25" }}>Social</Title>Chat
			</Title>
			<Profile />
			<Items />
		</Container>
	);
}

const Container = styled.div`
	width: 15%;
	height: 100%;
	padding: 3rem;
	z-index: 1;
`;

const Title = styled.span`
	font-size: 1.5rem;
	font-weight: 600;
`;

export default NavBar;
