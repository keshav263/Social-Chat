import React from "react";
import logo from "../assets/social-chat-icon.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderComp = (props) => {
	const history = useHistory();
	return (
		<Header>
			<List onClick={() => history.push("/get-started")}>
				<Icon
					style={{ cursor: "pointer" }}
					src={logo}
					alt="Social-Chat-Icon"
				></Icon>{" "}
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
	@media (max-width: 512px) {
		height: 2rem;
		width: 2rem;
	}
`;

const List = styled.a`
	text-decoration: none;
	padding: 1rem;
	color: #848484;

	margin: 1rem;
	&:hover {
		color: #000;
	}
	@media (max-width: 512px) {
		margin: 0;
	}
`;

export default HeaderComp;
