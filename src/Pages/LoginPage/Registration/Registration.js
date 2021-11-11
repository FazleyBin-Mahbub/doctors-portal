import { Button, Container, Grid, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../../images/login.png";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value);
  };
  const handleLoginSubmit = (e) => {
    alert("Login");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        <Grid sx={{ boxShadow: 1 }} item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Create an account
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="User name"
              variant="standard"
              required
              name="username"
              onChange={handleOnChange}
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              autoComplete="current-password"
              required
              name="password"
              onChange={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Re-enter your password"
              type="password"
              variant="standard"
              autoComplete="current-password"
              required
              name="password2"
              onChange={handleOnChange}
            />
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Have an account? Login</Button>
            </NavLink>
            <Button
              sx={{ width: "75%", mt: 4 }}
              variant="contained"
              type="submit"
            >
              Sign in
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="100%" src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
