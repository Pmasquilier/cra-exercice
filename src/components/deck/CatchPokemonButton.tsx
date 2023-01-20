import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { catchAPokemon } from "../../utils/pokemon-utils";

const CatchPokemonButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        sx={{ margin: 1 }}
        variant="contained"
        color="success"
        onClick={() => catchAPokemon(dispatch)}
      >
        Catch a Pokemon !
      </Button>
    </>
  );
};

export default CatchPokemonButton;
