import React from "react";
import "./charactercard.css";

const CharacterCard = ({ id, name, image, isPicked }) => (
    <div 
        className="card"
        key={id}
        data-id={id}
        name={name}
        onClick={isPicked}
        >
        <div className="card-image">
            <img src={image} alt={name} name={name}/>
        </div>
    </div>
)

export default CharacterCard;