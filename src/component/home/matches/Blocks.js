import React, { Component } from "react";
import { firebasematches } from "../../../firebase";
import MatchesBlock from "../../ui/MatchesBlock";
import { firebaseLooper, reverseArray } from "../../ui/utils";

class Blocks extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    firebasematches
      .limitToLast(6)
      .once("value")
      .then((snapshot) => {
        // console.log(firebaseLooper(snapshot));
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches),
        });
      });

    // firebasematches.once("value").then((snapshot) => {
    //   console.log(snapshot.val());
    // });
  }

  showMatches = (matches) =>
    matches
      ? matches.map((match) => (
          <div style={item}>
            {/* <div style={wrapper}> */}
            <MatchesBlock match={match} />
            {/* </div> */}
          </div>
        ))
      : null;

  render() {
    // const {matches} = this.state
    // console.log(this.state);
    return (
      <div style={home_matches}>{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;

const item = {
  border: "1px solid green",
  display: "flex",
};
// const wrapper = {
//   border: "1px solid red",
// };
const home_matches = {
  background: "#98c5e9",
  marginTop: "9px",
  padding: "50px 0px",
};
