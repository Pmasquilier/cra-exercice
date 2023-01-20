import PokemonTrainerDeck from "./PokemonTrainerDeck";
import CatchPokemonButton from "./CatchPokemonButton";

const PokemonTrainerOverview = () => {
  return (
    <div>
      <CatchPokemonButton></CatchPokemonButton>
      <PokemonTrainerDeck></PokemonTrainerDeck>
    </div>
  );
};

export default PokemonTrainerOverview;
