import React from "react";
import Featured from "./featured";
import Matches from "./matches";
import MeetPlayers from "./meetPlayers";

function Home() {
  return (
    <div className="black_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
    </div>
  );
}

export default Home;
