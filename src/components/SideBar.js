import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chats from "./SideBar/Chats";

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
			<Title>Chats</Title>
			<Chats />
		</Container>
	);
}

const Container = styled.div`
	width: 25%;
	padding: 3rem;
	height: 100%;
	/* background: green; */
	z-index: 2;
`;

const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Title = styled.h2`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export default SideBar;
