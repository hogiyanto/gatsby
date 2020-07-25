import React from "react";

import Header from "../components/header";
import PageMetadata from "../components/page-metadata";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <>
      <PageMetadata title="Contact" />
      <Layout>
        <Header text="Contact" />
        <p>This is the contact page</p>
      </Layout>
    </>
  );
};

export default Contact;
