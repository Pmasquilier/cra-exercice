import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Pokemon } from "../type/pokemon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
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

  return (
    <>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={pokemon.sprites}
          title={pokemon.name}
        />
        <CardContent>
          <ListItem sx={{ display: "inline-flex" }}>
            <div className="App">
              {!isNameFocused ? (
                <Typography
                  onClick={() => {
                    setIsNameFocused(true);
                  }}
                >
                  Name: {pokemon.name}
                </Typography>
              ) : (
                <TextField
                  autoFocus
                  value={pokemon.name}
                  onChange={(event) =>
                    changeAPokemonName(event.target.value, pokemon.id)
                  }
                  onBlur={() => setIsNameFocused(false)}
                />
              )}
            </div>
          </ListItem>
          <Typography variant="body1" component="div">
            Base experience : {pokemon.base_experience}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            <Link to="/pokemon-detail" state={{ pokemon: pokemon }}>
              Learn More
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => releaseAPokemon(pokemon.id)}
          >
            Release Pokemon
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PokemonCard;
