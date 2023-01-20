import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Pokemon } from "../../type/pokemon";
import { RootState } from "../../type/rootState";
import PokemonCard from "./PokemonCard";

const PokemonTrainerDeck = () => {
  const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemons);

  return (
    <>
      <Grid container spacing={2}>
        {pokemons?.map((pokemon) => (
          <Grid item xs={6} sm={3} key={pokemon.id}>
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PokemonTrainerDeck;
