import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../Home/Home";
const Layout = props => {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: "rgb(246, 247, 247)",
          minHeight: "85vh"
        }}
      >
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
