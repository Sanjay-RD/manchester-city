import React, { Component } from "react";
import { firebasematches } from "../../../firebase";
import MatchesBlock from "../../ui/MatchesBlock";
import { firebaseLooper, reverseArray } from "../../ui/utils";
import Slide from "react-reveal/Slide";

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
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    // const {matches} = this.state
    // console.log(this.state);
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
