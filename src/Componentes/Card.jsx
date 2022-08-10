import React from "react";
const Card = ({ pokemon, loading,PokeInfo}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Carregando...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>PokeInfo(item)}>
                                <h2>{item.id}</h2>
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