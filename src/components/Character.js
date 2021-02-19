// Write your Character component here
import React from "react"
// import axios from "axios"
import { MyH2, NameBox } from "./Style.js"


const CharacterCard = props => {
    const {character} = props;
 
    return (
    <NameBox>
        <div className="character card">
            <MyH2>Name:{character.name}</MyH2>
            <p>Height:{character.height}</p>
            <p>Mass:{character.mass}</p>
            <p>Hair Color:{character.hair_color}</p>
            <p>Skin Color:{character.skin_color}</p>
            <p>Eye Color:{character.eye_color}</p>
            <p>Birth Year:{character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </div>
    </NameBox>    
    );

};

export default CharacterCard
