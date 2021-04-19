import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "../containers/MainPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
