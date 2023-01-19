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

type Props = {
  pokemon: Pokemon;
  releaseAPokemon: (pokemonID: string) => void;
  changeAPokemonName: (name: string, pokemonID: string) => void;
};

const PokemonCard = ({
  pokemon,
  releaseAPokemon,
  changeAPokemonName,
}: Props) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
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
                  key="password"
                  onClick={() => {
                    setIsNameFocused(true);
                  }}
                >
                  {pokemon.name}
                </Typography>
              ) : (
                <TextField
                  key="password"
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
          <Typography variant="body2" component="div">
            Height : {pokemon.height}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Weight : {pokemon.weight}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            Learn More
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
