import {
  Button,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Pokemon } from "../type/pokemon";
import { Link } from "react-router-dom";

const PokemonDetails = () => {
  const location = useLocation();
  const pokemon: Pokemon = location.state.pokemon;

  return (
    <div>
      <Button variant="contained" color="primary" size="small">
        <Link to="/">Back to my pokedex</Link>
      </Button>
      <CardMedia
        sx={{ height: 150, width: 150 }}
        image={pokemon.sprites}
        title={pokemon.name}
      />
      <Typography>Name: {pokemon.name}</Typography>
      <Typography variant="body1" component="div">
        Base experience : {pokemon.base_experience}
      </Typography>
      <Typography variant="body2" component="div">
        Height : {pokemon.height}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Weight : {pokemon.weight}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Abilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemon.abilities.map((ability) => (
              <TableRow
                key={ability.ability.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{ability.ability.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PokemonDetails;
