import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

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
