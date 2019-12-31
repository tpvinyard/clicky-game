import React from "react";
import "./charactercard.css";

const CharacterCard = ({ id, name, image, handlePicked }) => (
    <div 
        className="card"
        key={id}
        data-id={id}
        name={name}
        onClick={handlePicked}
        >
        <div className="card-image">
            <img src={image} alt={name}/>
        </div>
    </div>
)

export default CharacterCard;