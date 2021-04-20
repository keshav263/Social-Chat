import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "../containers/MainPage";
import SignInPage from "../containers/SignInPage"
import MaintenancePage from "../containers/MaintenancePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/sign-in" component={SignInPage}/>
      <Route exact path="/maintenance" component={MaintenancePage}/>
    </Switch>
  );
};

export default Routes;
