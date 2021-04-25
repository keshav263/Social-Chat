import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Divider, Avatar, IconButton, InputBase } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { makeStyles } from "@material-ui/core/styles";
import TelegramIcon from "@material-ui/icons/Telegram";
import db from "../firebase/firebase";
import { firebase } from "../firebase/firebase";
import { useSelector } from "react-redux";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		fontSize: 15,
		paddingLeft: theme.spacing(1),
	},
	iconButton: {
		padding: 5,
		float: "right",
		paddingRight: theme.spacing(1),
	},
}));
function Messages() {
	const classes = useStyles();
	const [roomName, setRoomName] = useState("");
	const user = useSelector((state) => state.Auth);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const { roomId } = useParams();
	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.addEventListener("DOMNodeInserted", (event) => {
			const { currentTarget: target } = event;
			target.scroll({ top: target.scrollHeight, behavior: "smooth" });
		});
	};
	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => {
					setRoomName(snapshot.data().name);
				});

			db.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) => {
					setMessages(snapshot.docs.map((doc) => doc.data()));
				});
			scrollToBottom();
		}
	}, [roomId]);

	const sendMessage = () => {
		if (roomId) {
			db.collection("rooms").doc(roomId).collection("messages").add({
				message: input,
				name: user.username,
				displayPicture: user.displayPicture,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
			scrollToBottom();
			setInput("");
		}
	};

	const getDateFormat = (message) => {
		const d = moment(message?.timestamp?.toDate()).format("LT");
		return d;
	};

	return (
		<Container>
			<SenderContainer>
				<PersonOutlineIcon style={{ fontSize: 20 }} />
				<Sender>{roomName}</Sender>
			</SenderContainer>
			<Divider style={{ transform: "translateY(-10px)" }} />
			<MessagesContainer ref={messagesEndRef}>
				{messages.map((message) => {
					if (message.name === user.username) {
						return (
							<MessageContainer
								style={{
									marginLeft: "auto",
									marginTop: "0.1rem",
									marginBottom: "0.1rem",
								}}
							>
								<Message style={{ background: "#7230FF", color: "#fff" }}>
									{message.message}
									<TimeStamp style={{ color: "#fff" }}>
										{getDateFormat(message)}
									</TimeStamp>
								</Message>
							</MessageContainer>
						);
					} else {
						return (
							<MessageContainer>
								<Avatar
									variant="circular"
									className={classes.small}
									style={{ margin: "10px 10px" }}
									src={message.displayPicture}
								/>
								<Message>
									<Sender
										style={{ margin: 0, color: "#888", marginBottom: "0.5rem" }}
									>
										{message.name}
									</Sender>
									{message.message}
									<TimeStamp className="chat_timestemp">
										{new Date(message.timestamp?.toDate()).toLocaleTimeString()}
									</TimeStamp>
								</Message>
							</MessageContainer>
						);
					}
				})}
			</MessagesContainer>

			<SendBarContainer>
				<InputBase
					className={classes.input}
					value={input}
					onKeyUp={(event) => {
						if (event.key === "Enter") {
							sendMessage();
						}
					}}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type here.."
				/>
				<IconButton
					type="submit"
					onClick={() => sendMessage()}
					className={classes.iconButton}
				>
					<TelegramIcon style={{ fontSize: 30 }} />
				</IconButton>
			</SendBarContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 50%;
	padding: 0 2rem;
	height: 100%;
	padding-top: 7rem;
	z-index: 2;
	box-sizing: border-box;
`;

const SenderContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Sender = styled.h6`
	margin-left: 1.5rem;
`;

const MessagesContainer = styled.div`
	display: flex;
	height: 22rem;
	flex-direction: column;
	overflow: scroll;
`;

const MessageContainer = styled.div`
	display: flex;
	margin: 1rem;
`;
const Message = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	width: fit-content;
	background-color: #fff;
	font-size: 0.8rem;
	font-weight: 600;
`;

const TimeStamp = styled.span`
	color: #888;
	font-size: 0.4rem;
	margin-left: 1rem;
`;

const SendBarContainer = styled.div`
	background-color: #fff;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	position: fixed;
	box-shadow: rgb(0 0 0 / 8%) 0px 10px 20px 0px;
	width: 35%;
	bottom: 15%;
`;

export default Messages;
