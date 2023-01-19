import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ButtonAppBar from "../components/NavBar";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      {isAuthenticated && <h1>This is my deck</h1>}
      {!isAuthenticated && (
        <h1>You need to be authenticated to see your pokemons!</h1>
      )}
    </div>
  );
};

export default HomePage;
