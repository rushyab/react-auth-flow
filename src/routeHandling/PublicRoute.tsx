import React, { ReactNode, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { LANDING_ROUTE, HOME_ROUTE } from "../constants/routesNomenclature";
import { Route, Redirect } from "react-router-dom";

interface PublicRouteProps {
  restricted: boolean;
  children: ReactNode;
  path: string;
  [key: string]: any;
}

export function PublicRoute(props: PublicRouteProps) {
  const { auth } = useContext(authContext);

  const { restricted, children, path, ...rest } = props;

  const REDIRECT_URL = HOME_ROUTE;

  // restricted = false meaning public route
  // restricted = true meaning restricted route
  if (auth.id && auth.token && restricted) {
    return <Redirect to={{ pathname: REDIRECT_URL }} />;
  }

  // public: "/"
  // public: "/login" - restricted
  // public: "/contact"

  // private: "/dahboard"
  // private: "/home"

  return (
    <Route path={path} {...rest}>
      {children}
    </Route>
  );
}
