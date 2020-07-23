import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import PageMetadata from "../components/page-metadata";

const Home = () => {
  return (
    <>
      <PageMetadata title="Home" />
      <Link to="/contact">Contact</Link>
      <Header text="Home" />
      <p>This is the home page</p>
      <p>HTTP server host: {process.env.HTTP_SERVER_HOST}</p>
    </>
  );
};

export default Home;
