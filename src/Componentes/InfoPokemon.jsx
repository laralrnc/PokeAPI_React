import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const InfoPokemon = ({ data }) => {
    const [contador, setContador] = useState(0);

    function alterarImagem(pikachu) {//Recebemos dois valores por parâmetro.
        document.getElementById(pikachu).src = 'https://i.imgur.com/BEdL5Xl.png';
    }

    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        {data.name !== 'pikachu' ? (
                            <h1>{data.name}</h1>
                        ) : (

                            <button className="btn-hover"
                                onClick={alterarImagem}

                            >

                                Você clicou  vezes</button>




                        )}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" id='pikachu' />
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
                                data.stats.map(poke => {
                                    return (
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