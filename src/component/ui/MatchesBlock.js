import React from "react";

function MatchesBlock({ match }) {
  return (
    <div style={match_block}>
      <div style={match_date}>
        {match.final ? match.date : `Match Not Played Yet ${match.date}`}
      </div>
      <div style={match_wrapper}>
        <div style={match_top}>
          <div style={left}>
            <div
              style={icon}
              style={{
                background: `url(/images/team_icons/${match.localThmb}.png)`,
              }}
            ></div>
            <div style={team_name}>{match.local}</div>
          </div>
          <div style={right}>{match.final ? match.resultLocal : `-`}</div>
        </div>
      </div>
    </div>
  );
}

export default MatchesBlock;

const match_block = {};
const match_date = {};
const match_wrapper = {};
const match_top = {};
const left = {};
const icon = {
  width: "50px",
  height: "50px",
  backgroundSize: "cover !important",
};
const team_name = {};
const right = {};
