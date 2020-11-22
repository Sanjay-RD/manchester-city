import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import { Animate } from "react-move";

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#82B0D4",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0,
      },
      {
        background: "#ffffff",
        left: 330,
        rotate: 25,
        top: -397,
        delay: 200,
      },
      {
        background: "#82B0D4",
        left: 540,
        rotate: 25,
        top: -498,
        delay: 400,
      },
    ],
  };
  showStripes = () => {
    return this.state.stripes.map((stripe, i) => (
      //   console.log(i)
      <Animate
        key={i}
        show={true}
        start={{
          background: "#ffffff",
          opactiy: 0,
          left: 0,
          rotate: 0,
          top: 0,
        }}
        enter={{
          background: `${stripe.background}`,
          opactiy: 1,
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
        }}
      >
        {({ left, opacity, rotate, top, background }) => {
          return (
            <div
              className="strip"
              style={{
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`,
              }}
            ></div>
          );
        }}
      </Animate>
    ));
  };
  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
