import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Catch them all
          </Typography>
          <NavBarButtons></NavBarButtons>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
