import React, { ReactNode, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { LANDING_ROUTE } from "../constants/routesNomenclature";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  path: string;
  [key: string]: any;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const { auth } = useContext(authContext);

  const { children, path, ...rest } = props;

  const REDIRECT_URL = LANDING_ROUTE;

  if (auth.id && auth.token) {
    return (
      <Route path={path} {...rest}>
        {children}
      </Route>
    );
  }

  return <Redirect to={{ pathname: REDIRECT_URL }} />;
}
