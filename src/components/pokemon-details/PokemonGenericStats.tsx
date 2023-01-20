import { CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../../type/pokemon";

interface PokemonDetailProps {
  pokemon: Pokemon;
}

const PokemonGenericStats = ({ pokemon }: PokemonDetailProps) => {
  return (
    <>
      <CardMedia
        sx={{ height: 150, width: 150 }}
        image={pokemon.sprites}
        title={pokemon.name}
      />
      <Typography>Name:{pokemon.name}</Typography>
      <Typography variant="body1" component="div">
        Base experience : {pokemon.base_experience}
      </Typography>
      <Typography variant="body2" component="div">
        Height : {pokemon.height}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Weight : {pokemon.weight}
      </Typography>
    </>
  );
};

export default PokemonGenericStats;
