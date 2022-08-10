import React from "react";

const Card = ({ pokemon, loading }) => {
    return (
        <>
            {
                loading ? <h1>Carregando...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="card">
                                    <h1>{item.id}</h1>
                                    <img src={item.sprites.front_default} />
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