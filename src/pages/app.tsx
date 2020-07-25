import React from "react";
import { Router } from "@reach/router";

import PrivateRoute from "../components/private-route";
import Layout from "../components/layout";
import Profile from "../components/profile";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </Layout>
  );
};

export default App;
