import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const HomePage = (props) => {
	const user = useSelector((state) => state.Auth);

	useEffect(() => {
		if (!user.isAuth) {
			return props.history.push("/");
		}
	}, [props.history, user.isAuth]);
	return (
		<div>
			<p style={{ fontSize: "20rem" }}>Home</p>
		</div>
	);
};

export default HomePage;
