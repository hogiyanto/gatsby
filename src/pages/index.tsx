import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Link to="/contact">Contact</Link>
      <Header text="Home" />
      <p>This is the home page</p>
    </>
  );
};

export default Home;
