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
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <>
                                            <div className="grupo">
                                                <h2>{poke.ability.name}</h2>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className="status">

                            {
                                data.stats.map(poke=>{
                                    return(
                                        <>
                                        <ProgressBar className="containerP" completed={poke.base_stat} customLabel={poke.stat.name} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

        </>
    )
}
export default InfoPokemon;