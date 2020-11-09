import React, { Component } from "react";
import stripes from "../../../Resources/images/stripes.png";

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
            <div className="left_wrapper">text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
