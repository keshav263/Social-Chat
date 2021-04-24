import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
}));

function Chats() {
	const classes = useStyles();
	return (
		<MainContainer>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/1234.svg"
				/>
				<Content>
					<Name>Dev Room</Name>
					<Name
						style={{
							fontSize: "0.5rem",
							float: "right",
							marginRight: "1rem",
							color: "#888",
						}}
					>
						11 Oct
					</Name>
					<Message>Not now,I am too busy now,but sometime later...</Message>
				</Content>
			</Container>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/12334.svg"
				/>
				<Content>
					<Name>Dance Room</Name>
					<Name
						style={{
							fontSize: "0.5rem",
							float: "right",
							marginRight: "1rem",
							color: "#888",
						}}
					>
						11 Oct
					</Name>
					<Message>Not now,I am too busy now,but sometime later...</Message>
				</Content>
			</Container>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/12334.svg"
				/>
				<Content>
					<Name>Dance Room</Name>
					<Name
						style={{
							fontSize: "0.5rem",
							float: "right",
							marginRight: "1rem",
							color: "#888",
						}}
					>
						11 Oct
					</Name>
					<Message>Not now,I am too busy now,but sometime later...</Message>
				</Content>
			</Container>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/12334.svg"
				/>
				<Content>
					<Name>Dance Room</Name>
					<Name
						style={{
							fontSize: "0.5rem",
							float: "right",
							marginRight: "1rem",
							color: "#888",
						}}
					>
						11 Oct
					</Name>
					<Message>Not now,I am too busy now,but sometime later...</Message>
				</Content>
			</Container>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/12334.svg"
				/>
				<Content>
					<Name>Dance Room</Name>
					<Name
						style={{
							fontSize: "0.5rem",
							float: "right",
							marginRight: "1rem",
							color: "#888",
						}}
					>
						11 Oct
					</Name>
					<Message>Not now,I am too busy now,but sometime later...</Message>
				</Content>
			</Container>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/12334.svg"
				/>
				<Content>
					<Name>Dance Room</Name>
					<Name
						style={{
							fontSize: "0.5rem",
							float: "right",
							marginRight: "1rem",
							color: "#888",
						}}
					>
						11 Oct
					</Name>
					<Message>Not now,I am too busy now,but sometime later...</Message>
				</Content>
			</Container>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	overflow: scroll;
	height: 70%;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const Container = styled.div`
	display: flex;
	box-shadow: rgb(0 0 0 / 8%) 0px 10px 20px 0px;
	background-color: #fff;
	border-radius: 1rem;
	padding: 0.3rem;
	margin: 1rem 0;
`;

const Content = styled.div`
	margin-left: 10px;
`;
const Name = styled.h5`
	margin-top: 10px;
	display: inline-block;
	margin-bottom: 5px;
`;
const Message = styled.p`
	color: #888;
	margin-top: 0;
	margin-bottom: 5px;
	font-size: 0.7rem;
`;

export default Chats;
