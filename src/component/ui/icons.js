import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = (props) => {
  const template = (
    <div
      className="logo_style"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${logo}) no-repeat`,
        // backgroundSize: "cover",
      }}
    ></div>
  );

  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};
