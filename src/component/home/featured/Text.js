import React, { Component } from 'react'
import { Animate } from 'react-move'
import {easePolyOut} from 'd3-ease'
import featuredPlayer from '../../../Resources/images/featured_player.png'

 class Text extends Component {

    animateNumber=()=>(
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate:0
            }}
            enter={{
                opacity:1,
                rotate:[360],
                timing:{duration:1000,ease:easePolyOut}
            }}
        >
            {({opacity,rotate})=>{
                return(
                    <div className="featured_number"
                        style={{
                            opacity,
                            transform:`translate(250px, 70px) rotateY(${rotate}deg)`
                        }}                    
                    >
                        3
                    </div>
                )
            }}
        </Animate>
    )


    animateFirst=()=>(
        <Animate
            show={true}
            start={{
                opacity:0,
                x:504,
                y:330,
            }}
            enter={{
                opacity:1,
                x:[250],
                y:[330],
                timing:{duration:500,ease:easePolyOut}
            }}
        >
            {({opacity,x,y})=>{
                return(
                    <div className="featured_first"
                    style={{
                        opacity,
                        transform:`translate(${x}px,${y}px)`
                    }}
                    >
                        League
                    </div>
                )
            }}
        </Animate>
    )


    animateSecond=()=>(
        <Animate 
            show={true}
            start={{
                opacity:0,
                x:503,
                y:450
            }}
            enter={{
                opacity:1,
                x:[250],
                y:[450],
                timing:{duration:500,delay:200,ease:easePolyOut}
            }}
        >
            {({opacity,x,y})=>{
                return(
                    <div className="featured_first" style={{
                        opacity,
                        transform: `translate(${x}px,${y}px)`
                    }}>
                        championships
                    </div>
                )
            }}
        </Animate>
    )

    animatePlayer=()=>(
        <Animate
            show={true}
            start={{
                opacity:0,
            }}
            enter={{
                opacity:1,
                timing:{delay:800,duration:500,ease:easePolyOut}
            }}
        >
            {(opacity)=>{
                return(
                    <div className="featured_player"
                        style={{
                            opacity,
                            transform:'translate(500px,80px)',
                            background:`url(${featuredPlayer})`
                        }}
                    >

                    </div>
                )
            }}
        </Animate>
    )

    render() {
        return (
            <div className="featured_text">
                {this.animatePlayer()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
            </div>
        )
    }
}

export default Text
