import React from "react";
import Card from "./Card";
import InfoPokemon from "./InfoPokemon";
import axios from "axios";

const Main = () => {
    return (
        <>
            <div className="container">
                <div className="lista-poke">
                    <Card />
                    <Card />
                    <div className="btn-page">
                        <button className="btn-hover">Anterior</button>
                        <button className="btn-hover" >Próxima</button>
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

