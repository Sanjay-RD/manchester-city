import React from "react";
import { CityLogo } from "../ui/icons";

const Footer = () => {
  return (
    <div className="black_blue" style={black_bg}>
      <div style={footer_logo}>
        <CityLogo width="70px" height="70px" link={true} linkTo="/" />
      </div>
      <div style={footer_content}>
        Manchester City 2020. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;

const black_bg = {
  height: "100px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: "10px 0px",
};

const footer_logo = {
  margin: "0px auto",
};

const footer_content = {
  marginTop: "5px",
};
