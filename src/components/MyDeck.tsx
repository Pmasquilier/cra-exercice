import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";
import { Pokemon } from "../type/pokemon";

const MyDeck = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const addPokemonToMyDeck = (pokemon: any) => {
    const newPokemon: Pokemon = {
      name: pokemon.name,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
      sprites: pokemon.sprites.back_default,
    };
    setPokemon(newPokemon);
  };

  useEffect(() => {
    getPokemon(2)
      .then((pokemon) => addPokemonToMyDeck(pokemon))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>My Deck</h1>
      <p>{pokemon?.name}</p>
      <img src={pokemon?.sprites} alt={pokemon?.name} />
    </div>
  );
};

export default MyDeck;
