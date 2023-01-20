import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import { Pokemon } from "../type/pokemon";

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [] as Pokemon[],
  reducers: {
    addPokemon: (state, action) => {
      const newPokemon: Pokemon = {
        name: action.payload.name,
        base_experience: action.payload.base_experience,
        height: action.payload.height,
        weight: action.payload.weight,
        sprites: action.payload.sprites.back_default,
        abilities: action.payload.abilities,
        id: nanoid(),
      };
      state.push(newPokemon);
    },
    removePokemon: (state, action) => {
      return state.filter((pokemon) => pokemon.id !== action.payload);
    },
    changePokemonName: (state, action) => {
      return state.map((pokemon) => {
        if (pokemon.id === action.payload.pokemonID) {
          return { ...pokemon, name: action.payload.pokemonName };
        }
        return pokemon;
      });
    },
  },
});

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
});
