// src/auth/auth0-provider-with-history.js

import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();


  //const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  //const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  //const audience = process.env.REACT_APP_AUTH0_AUDIENCE
  //REACT_APP_SERVER_URL='http://localhost:3000'

  const domain = 'dev-lutymdw4.us.auth0.com';
  const clientId = 'qIWYpebqurDMzXmGh14Da9m2fw420fcr';

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;