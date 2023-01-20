import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }: any) => {
  const navigate = useNavigate();

  const domain: string = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
  const redirectUri: string = process.env
    .REACT_APP_AUTH0_CALLBACK_URL as string;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
