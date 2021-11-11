import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../../images/login.png";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
    console.log(field, value, newLoginData);
  };
  const handleLoginSubmit = (e) => {
    alert("Login");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Login
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
            <NavLink style={{ textDecoration: "none" }} to="/registration">
              <Button variant="text">New user? Please Register</Button>
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

export default Login;
