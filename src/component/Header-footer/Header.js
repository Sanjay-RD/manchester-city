import { AppBar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { CityLogo } from "../ui/icons";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      style={{
        boxShadow: "none",
        backgroundColor: "#82b0d4",
        padding: "10px 0px",
        borderBottom: "2px solid #00285e",
      }}
    >
      <Toolbar
        variant="dense"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <div className="logo">
            <CityLogo width="60px" height="60px" link={true} linkTo="/" />
          </div>
        </div>
        <div>
          <Link to="/the_team" style={links}>
            <Button color="inherit">The Teams</Button>
          </Link>
          <Link to="/the_matches" style={links}>
            <Button color="inherit">Matches</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const links = {
  textDecoration: "none",
  color: "#fff",
};
