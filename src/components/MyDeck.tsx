import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";
import { Pokemon } from "../type/pokemon";

const MyDeck = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const addPokemonToMyDeck = (pokemon: any) => {
    const newPokemon: Pokemon = {
      name: pokemon.name,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
      sprites: pokemon.sprites.back_default,
    };
    setPokemons([...pokemons, newPokemon]);
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const catchAPokemon = () => {
    getPokemon(getRandomInt(100))
      .then((pokemon) => addPokemonToMyDeck(pokemon))
      .catch(console.error);
  };

  useEffect(() => {
    getPokemon(getRandomInt(3))
      .then((pokemon) => addPokemonToMyDeck(pokemon))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>My Deck</h1>
      <div key={nanoid()}>
        {pokemons?.map((pokemon) => (
          <>
            <p>{pokemon?.name}</p>
            <img src={pokemon?.sprites} alt={pokemon?.name} />
          </>
        ))}
      </div>
      <Button variant="contained" onClick={catchAPokemon}>
        Catch a Pokemon !
      </Button>
    </div>
  );
};

export default MyDeck;
