import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import pokedexLogo from '../assets/images/pokedex-logo.png';
import { useNavigate } from "react-router-dom";


const PokemonCard = () => {

    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])

    const typeOne = pokemon.types?.[0]?.type.name
    const typeTwo = pokemon.types?.[1]?.type.name

    let colorOne = typeOne === "normal" ? '#A94D8B' :
        (typeOne === "fighting" ? '#D54141' :
        (typeOne === "flying" ? '#439EDC' :
        (typeOne === "poison" ? '#5732CB' :
        (typeOne === "ground" ? '#954827' :
        (typeOne === "rock" ? '#786452' :
        (typeOne === "bug" ? '#5C6D4C' :
        (typeOne === "ghost" ? '#1C1F1E' :
        (typeOne === "steel" ? '#436473' :
        (typeOne === "fire" ? '#C14008' :
        (typeOne === "water" ? '#0C6A7D' :
        (typeOne === "grass" ? '#058046' :
        (typeOne === "electric" ? '#B94A02' :
        (typeOne === "psychic" ? '#CF2096' :
        (typeOne === "ice" ? '#5F7E79' :
        (typeOne === "dragon" ? '#B44343' :
        (typeOne === "dark" ? '#484848' :
        (typeOne === "fairy" ? '#950A5E' :
        (typeOne === "unknown" ? '#CECECE' : '#516E75'
        ))))))))))))))))))

    let colorTwo = typeTwo === "normal" ? '#A94D8B' :
        (typeTwo === "fighting" ? '#D54141' :
        (typeTwo === "flying" ? '#439EDC' :
        (typeTwo === "poison" ? '#5732CB' :
        (typeTwo === "ground" ? '#954827' :
        (typeTwo === "rock" ? '#786452' :
        (typeTwo === "bug" ? '#5C6D4C' :
        (typeTwo === "ghost" ? '#1C1F1E' :
        (typeTwo === "steel" ? '#436473' :
        (typeTwo === "fire" ? '#C14008' :
        (typeTwo === "water" ? '#0C6A7D' :
        (typeTwo === "grass" ? '#058046' :
        (typeTwo === "electric" ? '#B94A02' :
        (typeTwo === "psychic" ? '#CF2096' :
        (typeTwo === "ice" ? '#5F7E79' :
        (typeTwo === "dragon" ? '#B44343' :
        (typeTwo === "dark" ? '#484848' :
        (typeTwo === "fairy" ? '#950A5E' :
        (typeTwo === "unknown" ? '#CECECE' : '#516E75'
        ))))))))))))))))))

    const hpValue = pokemon.stats?.[0].base_stat
    const attackValue = pokemon.stats?.[1].base_stat
    const defenseValue = pokemon.stats?.[2].base_stat
    const speedValue = pokemon.stats?.[5].base_stat
    const moves = pokemon.moves
    const abilities = pokemon.abilities


    console.log(pokemon);
    console.log(pokemon.types?.[1]?.type.name);

    return (
        <div className='pokemonCard'>
            <header className='pokeballHeader'>
                <button className='back' onClick={() => navigate(-1)}> <i className="fa-solid fa-arrow-left"></i> </button>
                <img className="pokedexLogoCard" src={pokedexLogo} alt="" />
                <div className='redHeader'></div>
                <div className='circleOutHeader'><div className='circleIn'></div></div>
                <div className='whiteHeader'></div>
            </header>
            <div className='container'>
                <div className='pokemonInfo'>
                    <div className='backgroundImageColor' style={{ background: colorOne }}>
                        <img className="pokemonCardImage" src={pokemon.sprites?.other.home.front_default} alt="" />
                    </div>
                    <p className='pokemonIdCard'>#{pokemon.id}</p>
                    <div className='nameCardText'>
                        <hr />
                        <h1 className='pokemonNameCard'>{pokemon.name}</h1>
                        <hr />
                    </div>
                    <div className='pokemonWeightHeight'>
                        <div className='pokemonWeight'>
                            <p>Weight</p>
                            <b>{pokemon.weight}</b>
                        </div>
                        <div className='pokemonHeight'>
                            <p>Height</p>
                            <b>{pokemon.height}</b>
                        </div>
                    </div>
                    <div className='typeAndAbilities'>
                        <div className='pokemonTypeInfo'>
                            <p className='typeTitleCard'>Type</p>
                            <div className='typesPokemonCard'>
                                <div className='typeOne'>
                                    <p style={{ background: colorOne }} className="pokemonTypeOne">{pokemon.types?.[0]?.type.name}</p>
                                </div>
                                <div style={{ display: typeTwo === undefined ? 'none' : 'block' }}>
                                    <p style={{ background: colorTwo }} className="pokemonTypeOne">{pokemon.types?.[1]?.type.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className='pokemonAbilitiesInfo'>
                            <p className='abilitiesTitleCard'>Abilities</p>
                            <div className='pokemonAbilities'>
                                {abilities?.map((ability) => (
                                    <div className='abilityOne' key={ability.ability.name}><p>{ability.ability.name}</p></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='stats'>
                        <p className='statsTitleCard'>Stats</p>
                        <div className='progress hpValue'>
                            <div className='valueTextStats'>
                                <b>hp</b>
                                <p className='valueCard'>{hpValue} / 150</p>
                            </div>
                            <progress max="150" value={hpValue}></progress>
                        </div>
                        <div className='progress attackValue'>
                            <div className='valueTextStats'>
                                <b>attack</b>
                                <p className='valueCard'>{attackValue} / 150</p>
                            </div>
                            <progress max="150" value={attackValue}></progress>
                        </div>
                        <div className='progress defenseValue'>
                            <div className='valueTextStats'>
                                <b>defense</b>
                                <p className='valueCard'>{defenseValue} / 150</p>
                            </div>
                            <progress max="150" value={defenseValue}></progress>

                        </div>
                        <div className='progress speedValue'>
                            <div className='valueTextStats'>
                                <b>speed</b>
                                <p className='valueCard'>{speedValue} / 150</p>
                            </div>
                            <progress max="150" value={speedValue}></progress>

                        </div>
                    </div>
                </div>
            </div>
            <div className='movesList'>
                <p className='movementsTitleCard'>Movements</p>
                <ul className='moves'>
                    {moves?.map((move) => (
                        <li className='move' key={move.move.name}>{move.move.name}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default PokemonCard;