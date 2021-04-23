import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "../containers/MainPage";
import SignInPage from "../containers/SignInPage";
import MaintenancePage from "../containers/MaintenancePage";
import InitialPage from "../containers/InitialPage";
import HomePage from "../containers/HomePage";
// import {useSelector} from "react-redux"

const Routes = () => {
	// const isAuth=useSelector(state=>state.Auth.isAuth)
	return (
		<Switch>
			<Route exact path="/" component={InitialPage} />
			<Route exact path="/get-started" component={MainPage} />
			<Route exact path="/sign-in" component={SignInPage} />
			<Route exact path="/maintenance" component={MaintenancePage} />
			<Route exact path="/home" component={HomePage} />
		</Switch>
	);
};

export default Routes;
