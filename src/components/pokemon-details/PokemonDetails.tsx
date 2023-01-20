import { useLocation } from "react-router-dom";
import { Pokemon } from "../../type/pokemon";
import { BackToPokedexButton } from "./BackToPokedexButton";
import PokemonAbilities from "./PokemonAbilities";
import PokemonGenericStats from "./PokemonGenericStats";

const PokemonDetails = () => {
  const location = useLocation();
  const pokemon: Pokemon = location.state.pokemon;

  return (
    <div>
      <BackToPokedexButton></BackToPokedexButton>
      <PokemonGenericStats pokemon={pokemon}></PokemonGenericStats>
      <PokemonAbilities abilities={pokemon.abilities}></PokemonAbilities>
    </div>
  );
};

export default PokemonDetails;
