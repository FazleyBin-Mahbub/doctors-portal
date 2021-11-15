import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
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
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/home"
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/appointment"
          >
            <Button color="inherit">Appointment</Button>
          </NavLink>
          {user.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white", margin: 9 }}
                to="/dashboard"
              >
                <Button variant="contained" color="success">
                  Dashboard
                </Button>
              </NavLink>
              <Button variant="contained" onClick={logout} color="error">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "red" }}
              to="/login"
            >
              <Button variant="contained" color="success">
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
