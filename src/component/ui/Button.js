import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const templates = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: "5px 10px",
        fontFamily: "Righteous",
        display: "inline-block",
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkTo}>{templates}</Link>;
  } else {
    return templates;
  }
}

export default Button;
