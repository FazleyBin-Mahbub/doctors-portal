import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/appointment">
            <Button color="inherit">Appointment</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button color="inherit">Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
