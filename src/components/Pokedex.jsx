import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import PokemonItem from './PokemonItem';
import { useNavigate } from "react-router-dom";
import pokedexLogo from '../assets/images/pokedex-logo.png';


const Pokedex = () => {
    const user = useSelector((state) => state.user);
    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState("")
    const [types, setTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
            .then(res => setPokemons(res.data.results))

        axios
            .get("https://pokeapi.co/api/v2/type")
            .then((res) => setTypes(res.data.results));
    }, [])
    
    const pokemonSearchLowerCase= pokemonSearch.toLowerCase()

    const submit = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearchLowerCase}`);
    }

    const filterType = (e) => {
        axios.get(e.target.value)
            .then((res) => setPokemons(res.data.pokemon));
    }

    const [page, setPage] = useState(1);
    const lastIndex = page * 20;
    const firstIndex = lastIndex - 20;
    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(pokemons.length / 20);

    const numbers = [];
    for (let i = 1; i <= lastPage; i++) {
        numbers.push(i);
    }

    return (
        <div>
            <header className='pokeballHeader'>
                <button className="logOut" onClick={() => navigate(`/`)}> <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                <img className="pokedexLogo" src={pokedexLogo} alt="" />
                <div className='redHeader'></div>
                <div className='circleOutHeader'><div className='circleIn'></div></div>
                <div className='whiteHeader'></div>
                <div className='welcomeUser'> <b className='userTextName'> Welcome, {user}! </b>  Here you can find your favorite pokemon.</div>
            </header>
            <div className='inputSearch'>
                <form className='formSearchPokemon' onSubmit={submit}>
                    <input
                        type="text"
                        value={pokemonSearchLowerCase}
                        onChange={(e) => setPokemonSearch(e.target.value)}
                        className='inputSearchPokemon'
                        placeholder='search here...'
                    />
                    <button className='buttonSearchPokemon'><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <select onChange={filterType}>
                    <option value="">All pokemons</option>
                    {types.map((type) => (
                        <option value={type.url} key={type.url}>{type.name}</option>
                    ))}
                </select>
            </div>
            <ul className='pokedex'>
                {pokemonsPaginated?.map((pokemon) => (
                    <PokemonItem pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                ))}
            </ul>

            <div className='pages'>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                &bull;
                &bull;
                &bull;
                <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>


        </div>
    );
};

export default Pokedex;