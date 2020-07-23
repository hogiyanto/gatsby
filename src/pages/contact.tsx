import React from "react";
import { Link } from "gatsby"
import Header from "../components/headerr";

const Contact = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Header text="Contact" />
      <p>This is the contact page</p>
    </>
  );
};

export default Contact;