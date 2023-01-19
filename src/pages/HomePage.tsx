import { useAuth0 } from "@auth0/auth0-react";
import MyDeck from "../components/MyDeck";
import ButtonAppBar from "../components/NavBar";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      {isAuthenticated && <MyDeck></MyDeck>}
      {!isAuthenticated && (
        <h1>You need to be authenticated to see your pokemons!</h1>
      )}
    </div>
  );
};

export default HomePage;
