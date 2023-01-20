import { useAuth0 } from "@auth0/auth0-react";
import AuthenticatedHome from "../components/auth/AuthenticatedHome";
import UnauthenticatedHome from "../components/auth/UnauthenticatedHome";
import ButtonAppBar from "../components/navbar/NavBar";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>

      {isAuthenticated ? (
        <AuthenticatedHome></AuthenticatedHome>
      ) : (
        <UnauthenticatedHome></UnauthenticatedHome>
      )}
    </div>
  );
};

export default HomePage;
