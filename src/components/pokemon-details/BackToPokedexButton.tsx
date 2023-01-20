import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const BackToPokedexButton = () => {
  return (
    <Button variant="contained" color="primary" size="small">
      <Link to="/">Back to my pokedex</Link>
    </Button>
  );
};
