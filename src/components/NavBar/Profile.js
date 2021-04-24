import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function Profile() {
	const user = useSelector((state) => state.Auth);
	return (
		<Container>
			<Avatar alt="user pic" src={user.displayPicture} />
			<Content>
				<Title as="h3">Profile</Title>
				<Title style={{ fontSize: "0.8rem", color: "#888" }}>
					{user.username}
				</Title>
			</Content>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	margin: 3rem 0;
	align-items: center;
`;

const Content = styled.div`
	margin-left: 10px;
`;

const Title = styled.p`
	margin: 0;
`;

export default Profile;
