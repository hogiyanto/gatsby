import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const PageMetadata = ({ title }: Props) => {
  return <Helmet title={`Learn Gatsby | ${title}`} />;
};

export default PageMetadata;
