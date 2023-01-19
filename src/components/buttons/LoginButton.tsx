import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <>
      <Button variant="contained" onClick={handleLogin}>
        Sign In
      </Button>
    </>
  );
};

export default LoginButton;
