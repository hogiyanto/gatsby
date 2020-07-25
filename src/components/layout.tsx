import React from "react";

import NavBar from "./nav-bar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
