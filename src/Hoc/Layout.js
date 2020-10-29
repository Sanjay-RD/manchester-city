import React from "react";
import Footer from "../component/Header-footer/Footer";
import Header from "../component/Header-footer/Header";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
