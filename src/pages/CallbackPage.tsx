import React from "react";
import ButtonAppBar from "../components/ButtonAppBar";
//The callback-page.js component will only render the navigation bar and an
//empty content container to help you create a smooth transition between a route
//with no content, /callback, to a route with content, such as the /profile page.
export const CallbackPage = () => {
  return (
    <div>
      <ButtonAppBar />
    </div>
  );
};
