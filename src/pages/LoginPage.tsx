import React from "react";
import LoginButton from "../components/buttons/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "../components/buttons/SignupButton";

const LoginPage = () => {
  const { isLoading, error } = useAuth0();

  return (
    <main>
      <h1>Auth0 Login</h1>
      {error && <p>Authentication error</p>}
      {!error && isLoading && <p>Loading ...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton></LoginButton>
          <SignupButton></SignupButton>
        </>
      )}
    </main>
  );
};

export default LoginPage;
