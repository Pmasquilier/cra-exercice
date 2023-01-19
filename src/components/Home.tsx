import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isLoading, error } = useAuth0();

  return (
    <main>
      <h1>Auth0 Login</h1>
      {error && <p>Authentication error</p>}
      {!error && isLoading && <p>Loading ...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton></LoginButton>
        </>
      )}
    </main>
  );
};

export default Home;
