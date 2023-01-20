import { nanoid } from "@reduxjs/toolkit";
import { Pokemon } from "../type/pokemon";
import { getPokemon } from "./api";
import { getRandomInt } from "./utils";

export const addPokemonToMyDeck = (pokemon: any, dispatch: any) => {
  const newPokemon: Pokemon = {
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    sprites: pokemon.sprites,
    abilities: pokemon.abilities,
    id: nanoid(),
  };
  dispatch({
    type: "pokemons/addPokemon",
    payload: newPokemon,
  });
};

export const catchAPokemon = (dispatch: any) => {
  getPokemon(getRandomInt(100))
    .then((pokemon) => addPokemonToMyDeck(pokemon, dispatch))
    .catch(console.error);
};
