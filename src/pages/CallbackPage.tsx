import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
//The callback-page.js component will only render the navigation bar and an
//empty content container to help you create a smooth transition between a route
//with no content, /callback, to a route with content, such as the /profile page.
export const CallbackPage = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Catch them all
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>{" "}
    </div>
  );
};
