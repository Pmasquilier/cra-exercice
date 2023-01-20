import { Typography } from "@mui/material";

const UnauthenticatedHome = () => {
  return (
    <>
      <Typography sx={{ margin: 4 }} variant="h4" align="center">
        You need to be authenticated to see your pokemons!
      </Typography>
    </>
  );
};

export default UnauthenticatedHome;
