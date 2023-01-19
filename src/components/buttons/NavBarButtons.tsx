import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignupButton from "./SignupButton";

const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default NavBarButtons;
