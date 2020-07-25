import React from "react";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";

import { isLoggedIn } from "../services/auth";

interface Props extends RouteComponentProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location?.pathname !== "/") {
    navigate("/");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
