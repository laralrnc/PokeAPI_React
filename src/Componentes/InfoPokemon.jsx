import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const InfoPokemon = ({ data }) => {
    return (
        <>
            {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="habilidades">
                            <div className="grupo">
                                <h2>Blaze</h2>
                            </div>
                            <div className="grupo">
                                <h2>solar-power</h2>
                            </div>
                        </div>
                        <div className="status">
                            <div>

                                <ProgressBar className="containerP" completed={30} customLabel="HP" />
                                <ProgressBar className="containerP" completed={30} customLabel="Ataque" />
                                <ProgressBar className="containerP" completed={30} customLabel="Defesa" />
                                <ProgressBar className="containerP" completed={30} customLabel="Ataque especial" />
                                <ProgressBar className="containerP" completed={30} customLabel="Velocidade" />

                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}
export default InfoPokemon;