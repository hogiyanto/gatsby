import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import PageMetadata from "../components/page-metadata";

const Contact = () => {
  return (
    <>
      <PageMetadata title="Contact" />
      <Link to="/">Home</Link>
      <Header text="Contact" />
      <p>This is the contact page</p>
    </>
  );
};

export default Contact;
