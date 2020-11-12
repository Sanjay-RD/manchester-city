import React, { Component } from "react";
import stripes from "../../../Resources/images/stripes.png";
import Button from "../../ui/Button";

class MeetPlayers extends Component {
  render() {
    return (
      <div
        className="meet_players"
        style={{ background: `url(${stripes})`, backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="meet_wrapper">
            <div className="right_wrapp flex">photos</div>
            <div className="left_wrapper">
              <div>
                <Button bck="#0D1831" size="100px" color="#fff">
                  Meet
                </Button>
              </div>
              <div>
                <Button bck="#0D1831" size="100px" color="#fff">
                  The
                </Button>
              </div>
              <div>
                <Button bck="#0D1831" size="100px" color="#fff">
                  Players
                </Button>
              </div>
              <div>
                <Button
                  bck="#fff"
                  size="20px"
                  color="#0D1831"
                  link={true}
                  linkTo="/the_team"
                  add={{ border: "1px solid #0D1831" }}
                >
                  meet them team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
