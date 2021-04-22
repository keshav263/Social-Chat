import React from "react";
import logo from "../assets/social-chat-icon.png";
import styled from "styled-components";

const HeaderComp = (props) => {
	return (
		<Header>
			<List href="/get-started">
				<Icon src={logo} alt="Social-Chat-Icon"></Icon>{" "}
			</List>
			<List href="/maintenance">About</List>
			<List href="/maintenance">Company</List>
			<List href="/maintenance">Services</List>
		</Header>
	);
};

const Header = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	height: 3rem;
	width: 3rem;
	margin-right: 0.5rem;
`;

const List = styled.a`
	text-decoration: none;
	padding: 1rem;
	color: #848484;
	margin: 1rem;
	&:hover {
		color: #000;
	}
`;

export default HeaderComp;
