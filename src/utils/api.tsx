import axios from "axios";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = async (id: number) => {
  const res = await axios.get(`${POKEMON_API_URL}${id}`);
  return res.data;
};
