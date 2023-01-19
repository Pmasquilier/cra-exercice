import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/my-deck",
      },
    });
  };

  return (
    <>
      {!isAuthenticated && (
        <Button variant="contained" onClick={handleLogin}>
          Sign In
        </Button>
      )}
    </>
  );
};

export default LoginButton;
