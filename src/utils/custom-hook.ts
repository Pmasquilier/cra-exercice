import { useDispatch } from "react-redux";

export const usePokemonSlice = () => {
  const dispatch = useDispatch();

  const releaseAPokemon = (pokemonID: string) => {
    dispatch({
      type: "pokemons/removePokemon",
      payload: pokemonID,
    });
  };

  const changeAPokemonName = (pokemonName: string, pokemonID: string) => {
    dispatch({
      type: "pokemons/changePokemonName",
      payload: {
        pokemonName,
        pokemonID,
      },
    });
  };

  return {
    releaseAPokemon,
    changeAPokemonName
  }
}