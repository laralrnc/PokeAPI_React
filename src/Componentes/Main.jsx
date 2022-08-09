import React from "react";
import Card from "./Card";
import InfoPokemon from "./InfoPokemon";

const Main = () => {
    return (
        <>
            <div className="container">
                <div className="lista-poke">
                    <Card />
                    <Card />
                    <div className="btn-page">
                        <button>Anterior</button>
                        <button>Próxima</button>
                    </div>
                </div>
                <div className="card-poke">
                    <InfoPokemon />
                </div>
            </div>
        </>
    )
}
export default Main;

