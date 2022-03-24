import React from "react";
import './Player.css'

const Player = (props) => {
    const {name, description, img} = props.player;
    // console.log(props);
    return (
        <div className="players">
            <img src={img} alt="" />
           <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}
export default Player;