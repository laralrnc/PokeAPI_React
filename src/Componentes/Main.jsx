import React, { useEffect, useState } from "react";
import Card from "./Card";
import InfoPokemon from "./InfoPokemon";
import axios from "axios";

// const [pokeData, setPokeData] = useState([]); dados da pokeapi - iniciando com array vazio
// const [loading, setLoading] = useState(true); useState de verificação do carregamento da api
// const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/"); url base de contato com a api
//     useEffect(() => { useEffect renderiza a aplicação novamente toda vez que o parametro [] é atualizado, ou seja sempre que a url for modificada a aplicação executará a função pokeFun
// pokeFun();
//}, [url])
//     const [nextUrl, setNextUrl] = useState(); useState de acesso as páginas seguintes da api.
//const [prevUrl, setPrevUrl] = useState(); pokeapi exibe as informações em arrays de 20 posições para navegar nas posições anteriores ou seguintes precisamos criar uma variavel para receber estas informações
// quando muda de página a url também modifica https://pokeapi.co/api/v2/pokemon?limit=40&offset=19
// O método sort() permite classificar (ordenar) elementos de um array local. Além de retornar o array ordenado, o método sort() altera as posições dos elementos no array original.
// state.sort((a, b) => a.id > b.id ? 1 : 1)
//parametros para exibição do card do pokemon
//<Card pokemon={pokeData} loading={loading} 
//PokeInfo={poke => setPokeDex(poke)} />
// verifica se o previous url possui informações, se possuir exibe o botão 
// <div className="btn-page">
//{prevUrl && <button className="btn-hover" onClick={() => {
    //setPokeData([])
    //setUrl(prevUrl)
//}}>Anterior</button>}
// parametro de exibição das informações do pokemon
//<div className="card-poke">
//<InfoPokemon data={pokeDex} />
//</div>
const Main = () => {

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true) //inicia o carregamento
        const res = await axios.get(url);
        setNextUrl(res.data.next); // acessa os dados da api e funciona como uma conexão com a "coluna next"
        setPrevUrl(res.data.previous); // acessa os dados da api e funciona como uma conexão com a "coluna previous"
        getPokemon(res.data.results); // caminho de acesso da api para as informações dos pokemons = data => results. 1 a 20 cada página equivale a um array de 20 posições
        setLoading(false) //finaliza o carregamento
        console.log(res.data);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)

            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : 1)
                return state;
            })
        })

    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
            <div className="container">
                <div className="lista-poke">
                    <Card pokemon={pokeData} loading={loading}
                        PokeInfo={poke => setPokeDex(poke)} />
                    <div className="btn-page">
                        {prevUrl && <button className="btn-hover" onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Anterior</button>}
                        {nextUrl && <button className="btn-hover" onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Próxima</button>}
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

