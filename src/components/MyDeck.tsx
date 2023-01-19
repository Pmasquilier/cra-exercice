import { Button, Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";
import { Pokemon } from "../type/pokemon";
import PokemonCard from "./PokemonCard";

const MyDeck = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const addPokemonToMyDeck = (pokemon: any) => {
    const newPokemon: Pokemon = {
      name: pokemon.name,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
      sprites: pokemon.sprites.back_default,
      id: nanoid(),
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

  const releaseAPokemon = (pokemonID: string) => {
    setPokemons((oldPokemonList) => {
      return oldPokemonList.filter((pokemon) => pokemon.id !== pokemonID);
    });
  };

  useEffect(() => {
    getPokemon(getRandomInt(3))
      .then((pokemon) => addPokemonToMyDeck(pokemon))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Button sx={{ margin: 1 }} variant="contained" onClick={catchAPokemon}>
        Catch a Pokemon !
      </Button>

      <Grid container spacing={2}>
        {pokemons?.map((pokemon) => (
          <Grid item xs={6} sm={3} key={nanoid()}>
            <PokemonCard
              pokemon={pokemon}
              releaseAPokemon={releaseAPokemon}
            ></PokemonCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyDeck;
