import React, { useState } from "react";
const Card = ({ pokemon, loading, PokeInfo }) => {
    const [cont, setCont] = useState(0);

    const contClique = () => {
        setCont(cont + 1);
    };
    return (
        <>
            {
                loading ? <h1>Carregando...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>

                                    <div className="card" key={item.id} onClick={() => PokeInfo(item)}>
                                        <img src={item.sprites.front_default} alt="" />
                                        <h2>{item.name}</h2>
                                    </div>

  

                            </>
                        )
                    })
            }
        </>
    )
}
export default Card;