import React, { useEffect, useState } from "react";
import Card from "./Card";
import InfoPokemon from "./InfoPokemon";
import axios from "axios";



const Main = () => {

    const [pokeData, setPokeData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res= await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false)
    }

    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result = await axios.get(item.url)

            setPokeData(state=>{
                state=[...state,result.data]
                state.sort((a,b) => a.id>b.id?1:1)
                return state;
            })
        })

    }

    useEffect(()=>{
        pokeFun();
    },[url])

    return (
        <>
            <div className="container">
                <div className="lista-poke">
                    <Card pokemon = {pokeData} loading={loading} 
                    PokeInfo ={poke=> setPokeDex(poke)} />
                    <div className="btn-page">
                        <button className="btn-hover">Anterior</button>
                        <button className="btn-hover" >Próxima</button>
                    </div>
                </div>
                <div className="card-poke">
                    <InfoPokemon data={pokeDex} />
                </div>
            </div>
        </>
    )
}
export default Main;

