import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const SignupButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/my-deck",
      },
    });
  };

  return (
    <>
      {!isAuthenticated && (
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      )}
    </>
  );
};

export default SignupButton;
