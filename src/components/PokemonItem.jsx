import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PokemonItem = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate();

    const type = pokemon.types?.[0]?.type.name

    let color = type === "normal" ? '#A94D8B' :
        (type === "fighting" ? '#D54141' :
        (type === "flying" ? '#439EDC' :
        (type === "poison" ? '#5732CB' :
        (type === "ground" ? '#954827' :
        (type === "rock" ? '#786452' :
        (type === "bug" ? '#5C6D4C' :
        (type === "ghost" ? '#1C1F1E' :
        (type === "steel" ? '#436473' :
        (type === "fire" ? '#C14008' :
        (type === "water" ? '#0C6A7D' :
        (type === "grass" ? '#058046' :
        (type === "electric" ? '#B94A02' :
        (type === "psychic" ? '#CF2096' :
        (type === "ice" ? '#5F7E79' :
        (type === "dragon" ? '#B44343' :
        (type === "dark" ? '#484848' :
        (type === "fairy" ? '#950A5E' :
        (type === "unknown" ? '#CECECE' : '#516E75'
        ))))))))))))))))))

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)

    return (
        <div className='pokemonItem' onClick={() => navigate(`/pokedex/${pokemon.id}`)} style={{ borderColor: color }}>
            <div className='colorPokemonType' style={{ background: color }}>
                <img className="pokemonImg" src={pokemon.sprites?.other.home.front_default} alt="" />
            </div>
            <h1 className='nameItem'>{pokemon.name}</h1>
            <div className='types'>
                <b>{pokemon.types?.[0]?.type.name} </b>
                <b>{pokemon.types?.[1]?.type.name}</b>
            </div>
            <div className='statsBase'>
                <div className="hp">
                    <p>{pokemon.stats?.[0].stat.name}</p>
                    <p className='value' style={{ color: color }}>{pokemon.stats?.[0].base_stat}</p>
                </div>
                <div className="attack">
                    <p>{pokemon.stats?.[1].stat.name}</p>
                    <p className='value' style={{ color: color }}>{pokemon.stats?.[1].base_stat}</p>
                </div>
                <div className="defense">
                    <p>{pokemon.stats?.[2].stat.name}</p>
                    <p className='value' style={{ color: color }}>{pokemon.stats?.[2].base_stat}</p>
                </div>
                <div className="speed">
                    <p>{pokemon.stats?.[5].stat.name}</p>
                    <p className='value' style={{ color: color }}>{pokemon.stats?.[5].base_stat}</p>
                </div>
            </div>

        </div>
    );
};

export default PokemonItem;