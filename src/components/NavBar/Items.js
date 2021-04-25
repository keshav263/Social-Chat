import React, { useState } from "react";
import styled from "styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TuneIcon from "@material-ui/icons/Tune";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/Auth";

const Container = styled.div`
	display: flex;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

const Title = styled.h6`
	margin-left: 1rem;
`;

function Items(props) {
	const [isHovered, setIsHovered] = useState(null);
	const dispatch = useDispatch();
	return (
		<>
			<Container
				onMouseEnter={() => {
					setIsHovered("1");
				}}
				onMouseLeave={() => {
					setIsHovered(null);
				}}
			>
				<DashboardIcon
					style={{
						color: isHovered === "1" ? "#000" : "#9aa0b1",
						fontSize: 15,
					}}
				/>
				<Title style={{ color: isHovered === "1" ? "#000" : "#9aa0b1" }}>
					Dashboard
				</Title>
			</Container>
			<Container
				onMouseEnter={() => {
					setIsHovered("2");
				}}
				onMouseLeave={() => {
					setIsHovered(null);
				}}
			>
				<ChatBubbleOutlineIcon
					style={{
						color: "#000",
						fontSize: 15,
					}}
				/>
				<Title style={{ color: "#000" }}>Chats</Title>
			</Container>
			<Container
				onMouseEnter={() => {
					setIsHovered("3");
				}}
				onMouseLeave={() => {
					setIsHovered(null);
				}}
			>
				<TuneIcon
					style={{
						color: isHovered === "3" ? "#000" : "#9aa0b1",
						fontSize: 15,
					}}
				/>
				<Title style={{ color: isHovered === "3" ? "#000" : "#9aa0b1" }}>
					Settings
				</Title>
			</Container>
			<Container
				style={{ position: "absolute", bottom: "15%" }}
				onClick={() => {
					dispatch(authActions.signOut());
				}}
				onMouseEnter={() => {
					setIsHovered("4");
				}}
				onMouseLeave={() => {
					setIsHovered(null);
				}}
			>
				<MeetingRoomIcon
					style={{
						color: isHovered === "4" ? "#000" : "#9aa0b1",
						fontSize: 15,
					}}
				/>
				<Title style={{ color: isHovered === "4" ? "#000" : "#9aa0b1" }}>
					Log out
				</Title>
			</Container>
		</>
	);
}

export default Items;
