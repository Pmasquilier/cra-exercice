import { Button, Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { getPokemon } from "../../services/api";
import { Pokemon } from "../../type/pokemon";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

const MyDeck = () => {
  const pokemons: Pokemon[] = useSelector((state: any) => state.pokemons);
  const dispatch = useDispatch();

  const addPokemonToMyDeck = (pokemon: any) => {
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

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const catchAPokemon = () => {
    getPokemon(getRandomInt(100))
      .then((pokemon) => addPokemonToMyDeck(pokemon))
      .catch(console.error);
  };

  return (
    <div>
      <Button
        sx={{ margin: 1 }}
        variant="contained"
        color="success"
        onClick={catchAPokemon}
      >
        Catch a Pokemon !
      </Button>

      <Grid container spacing={2}>
        {pokemons?.map((pokemon) => (
          <Grid item xs={6} sm={3} key={pokemon.id}>
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyDeck;
