import React from "react";

const InfoPokemon=()=>{
    return(
        <>
        <h1>Charmander</h1>
        <img src="./images/charmander.png"/>
        <div className="habilidades">
            <div className="grupo">
                <h2>Blaze</h2>
            </div>
            <div className="grupo">
                <h2>solar-power</h2>
            </div>
        </div>
        <div className="status">
            <h3>HP: 30</h3>
            <h3>Ataque: 52</h3>
            <h3>Defesa: 43</h3>
            <h3>Ataque especial: 50</h3>
            <h3>Velocidade: 30</h3>
        </div>
        </>
    )
}
export default InfoPokemon;