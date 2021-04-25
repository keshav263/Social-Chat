import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import db from "../../firebase/firebase";
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
}));

function ChatItem({ name, id }) {
	const classes = useStyles();
	const [messages, setMessages] = useState([]);
	const getDateFormat = (message) => {
		const d = moment(message?.timestamp?.toDate(), "YYYYMMDD").fromNow();
		return d;
	};
	useEffect(() => {
		if (id) {
			db.collection("rooms")
				.doc(id)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setMessages(snapshot.docs.map((doc) => doc.data()));
				});
		}
	}, [id]);

	return (
		<Link to={`/rooms/${id}`} key={id}>
			<Container>
				<Avatar
					className={classes.small}
					style={{ margin: "10px 10px" }}
					src="https://avatars.dicebear.com/api/human/1234.svg"
				/>
				<Content>
					<Name>{name}</Name>
					<TimeStamp>
						{messages.length > 0 && getDateFormat(messages[0])}
					</TimeStamp>
					<Message>{messages[0]?.message}</Message>
				</Content>
			</Container>
		</Link>
	);
}

const Container = styled.div`
	display: flex;
	box-shadow: rgb(0 0 0 / 8%) 0px 10px 20px 0px;
	background-color: #fff;
	border-radius: 1rem;
	padding: 0.3rem;
	position: relative;
	margin: 1rem 0;
`;

const Content = styled.div`
	margin-left: 10px;
`;
const Name = styled.h5`
	margin-top: 10px;
	display: inline-block;
	margin-bottom: 5px;
	color: #000;
`;

const TimeStamp = styled.p`
	font-size: 0.5rem;
	color: #888;
	position: absolute;
	right: 10px;
	top: 0;
`;
const Message = styled.p`
	color: #888;
	margin-top: 0;
	margin-bottom: 5px;
	font-size: 0.7rem;
	text-decoration: none;
`;

export default ChatItem;
