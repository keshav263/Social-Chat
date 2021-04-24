import React from "react";
import styled from "styled-components";
import { Divider, Avatar } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
}));
function Messages() {
	const classes = useStyles();
	return (
		<Container>
			<SenderContainer>
				<PersonOutlineIcon style={{ fontSize: 20 }} />
				<Sender>Jane Doe</Sender>
			</SenderContainer>
			<Divider style={{ transform: "translateY(-10px)" }} />
			<MessageContainer>
				<Avatar
					variant="circular"
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/123654.svg"
				/>
				<Message>
					<Sender style={{ margin: 0, color: "#888", marginBottom: "0.5rem" }}>
						Darrel Steward
					</Sender>
					Hi Jane!😉
					<TimeStamp className="chat_timestemp">13:20</TimeStamp>
				</Message>
			</MessageContainer>
			<MessageContainer style={{ float: "right" }}>
				<Message style={{ background: "#7230FF", color: "#fff" }}>
					Hey
					<TimeStamp style={{ color: "#fff" }}>13:21</TimeStamp>
				</Message>
			</MessageContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 50%;
	padding: 0 2rem;
	height: 100%;
	margin-top: 7rem;
	z-index: 2;
`;

const SenderContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Sender = styled.h6`
	margin-left: 1.5rem;
`;

const MessageContainer = styled.div`
	display: flex;
`;
const Message = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	background-color: #fff;
	font-size: 0.8rem;
	font-weight: 600;
`;

const TimeStamp = styled.span`
	color: #888;
	font-size: 0.4rem;
	margin-left: 1rem;
`;

export default Messages;
