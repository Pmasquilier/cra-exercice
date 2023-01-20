import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import MyDeck from "../components/deck/MyDeck";
import ButtonAppBar from "../components/navbar/NavBar";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      {isAuthenticated && <MyDeck></MyDeck>}
      {!isAuthenticated && (
        <Typography sx={{ margin: 4 }} variant="h4" align="center">
          You need to be authenticated to see your pokemons!
        </Typography>
      )}
    </div>
  );
};

export default HomePage;
