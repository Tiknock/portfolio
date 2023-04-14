import React from "react";
import Footer from "./Footer";
import Nav from "./Header/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
