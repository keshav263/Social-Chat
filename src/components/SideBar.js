import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import {
	Button,
	IconButton,
	InputBase,
	Modal,
	TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chats from "./SideBar/Chats";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import db from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		fontSize: 15,
	},
	iconButton: {
		padding: 10,
	},
}));

function SideBar() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [room, setRoom] = useState("");

	const createRoom = () => {
		if (room.length > 3) {
			db.collection("rooms").add({
				name: room,
			});
			setRoom("");
			setOpen(false);
		}
	};
	return (
		<Container>
			<SearchBarContainer>
				<IconButton
					type="submit"
					className={classes.iconButton}
					aria-label="search"
				>
					<SearchIcon style={{ fontSize: 15 }} />
				</IconButton>
				<InputBase className={classes.input} placeholder="Search" />
			</SearchBarContainer>
			<TitleContainer>
				<Title>Chats</Title>
				<IconButton onClick={() => setOpen(true)}>
					<AddCircleIcon />
				</IconButton>
			</TitleContainer>

			<Chats />
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalContainer>
					<Dialog>
						<ModalTitle>Add a new room</ModalTitle>
						<MeetingRoomIcon
							style={{
								fontSize: "80px",
								display: "block",
								margin: "1rem auto",
							}}
						/>
						<TextField
							style={{ margin: "1rem" }}
							label="Enter a name.."
							value={room}
							onChange={(e) => setRoom(e.target.value)}
						/>
						<Button
							variant="contained"
							type="submit"
							onClick={createRoom}
							style={{
								backgroundColor: "#7230FF",
								color: "#fff",
								marginTop: "1.5rem",
							}}
						>
							Add
						</Button>
					</Dialog>
				</ModalContainer>
			</Modal>
		</Container>
	);
}

const Container = styled.div`
	width: 25%;
	padding: 3rem;
	height: 100%;
	z-index: 2;
	@media (max-width: 980px) {
		padding: 3rem 1rem;
	}
	@media (max-width: 855px) {
		padding: 3rem;
		width: 50%;
		box-sizing: border-box;
	}
	@media (max-width: 720px) {
		padding: 3rem 1rem;
	}
`;

const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Title = styled.h2`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const ModalContainer = styled.div`
	position: absolute;
	top: 25%;
	left: 35%;
	outline: none;
`;

const Dialog = styled.div`
	background-color: #fff;
	width: 300px;
	height: 300px;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
`;

const ModalTitle = styled.h2`
	margin: 0;
	font-family: "Quicksand", sans-serif;
	font-size: 1.5rem;
`;

export default SideBar;
