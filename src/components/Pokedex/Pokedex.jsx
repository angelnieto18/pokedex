import React, { useState } from 'react';
import { useEffect } from 'react';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  const findPokemon = async (e) => {
    try {
      e.preventDefault();
      const { value } = e.target.pokemonName;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div id='container'>
        <form onSubmit={findPokemon}>
          <input id='pokemonName' name='pokemonName' type='text' placeholder='ej. pikachu' />
          <button id='submitButton' type='submit'>
            Buscar
          </button>
        </form>
      </div>
      <div id='pokemonContainer'>
        {pokemon === null ? (
          <h2>Esperando</h2>
        ) : (
          <div>
            <h2>{pokemon.name}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Pokedex;
