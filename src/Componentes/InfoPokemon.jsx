import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState } from "react";

const InfoPokemon = ({ data }) => {
  const [contador, setContador] = useState(0);

  const pokemonImage = contador >= 3 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg` : 'https://i.imgur.com/BEdL5Xl.png'

  return (
    <>
      {
        (!data) ? "" : (
          <>
            {data.name !== 'pikachu' ? (
              <h1>{data.name}</h1>

            ) : (
              <a
                onClick={() => setContador((c) => c + 1)}><h1>PIKACHU</h1></a>

            )}
            {data.name !== 'pikachu' ? (
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />

            ) : (
              <img src={pokemonImage} alt="" id='pikachu' />

            )}

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