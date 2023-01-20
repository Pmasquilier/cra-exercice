import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type AbilitiesProps = {
  abilities: Array<{ ability: { name: string } }>;
};

export const PokemonAbilities = ({ abilities }: AbilitiesProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Abilities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {abilities.map((ability) => (
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
  );
};

export default PokemonAbilities;
