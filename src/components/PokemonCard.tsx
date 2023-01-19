import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Pokemon } from "../type/pokemon";

type Props = {
  pokemon: Pokemon;
  releaseAPokemon: (pokemonID: string) => void;
};
const PokemonCard = ({ pokemon, releaseAPokemon }: Props) => {
  return (
    <>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={pokemon.sprites}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Base experience : {pokemon.base_experience}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Height : {pokemon.height}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Weight : {pokemon.weight}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small" onClick={() => releaseAPokemon(pokemon.id)}>
            Release Pokemon
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PokemonCard;
