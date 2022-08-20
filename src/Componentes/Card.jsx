import React from "react";
// loading ? <h1>Carregando...</h1> : se o carregamento for verdadeiro a mensagem 
//"Carregando..." é exibida para o usuário se for falso o card é exibido

const Card = ({ pokemon, loading, PokeInfo }) => {

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