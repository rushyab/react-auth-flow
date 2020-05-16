import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LANDING_ROUTE,
  DASHBOARD,
  HOME_ROUTE,
  LOGIN_ROUTE,
} from "../constants/routesNomenclature";
import { LandingPage } from "./LandingPage/LandingPage";
import { PrivateRoute } from "../routeHandling/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import { PublicRoute } from "../routeHandling/PublicRoute";

function Home() {
  return <div className="display-1">HOME</div>;
}

function Login() {
  return <div className="m-5 p-5 border border-danger">LOG IN</div>;
}

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={LANDING_ROUTE} component={LandingPage} exact />
          <PrivateRoute path={DASHBOARD} exact={true}>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path={HOME_ROUTE} exact={true}>
            <Home />
          </PrivateRoute>
          <PublicRoute path={LOGIN_ROUTE} restricted={true}>
            <Login />
          </PublicRoute>
        </Switch>
      </Router>
    </div>
  );
}
