import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../../firebase/firebase";
import ChatItem from "./ChatItem";

function Chats() {
	const [rooms, setRooms] = useState([]);
	useEffect(() => {
		const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
			setRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);

		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<MainContainer>
			{rooms.map((room) => {
				return <ChatItem key={room.id} id={room.id} name={room.data.name} />;
			})}
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

export default Chats;
