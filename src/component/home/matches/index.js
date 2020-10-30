import React from "react";
import Button from "../../ui/Button";

function Matches() {
  return (
    <div style={matches}>
      <div style={container}>
        <Button bck="#0e1731" size="50px" color="#ffffff">
          Matches
        </Button>
        blocks
        <Button
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          link={true}
          linkTo="/the_team"
        >
          See more matches
        </Button>
      </div>
    </div>
  );
}

export default Matches;

const matches = {
  backgroundColor: " #98c5e9",
  padding: "40px 0px",
  marginTop: "9px",
};
const container = {
  width: "80%",
  margin: "0 auto",
};
