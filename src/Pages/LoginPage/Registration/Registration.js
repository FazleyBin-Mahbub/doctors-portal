import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, loading, error } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Create an account
          </Typography>
          {!loading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Username"
                variant="standard"
                required
                name="username"
                type="text"
                onBlur={handleOnBlur}
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Email"
                variant="standard"
                required
                name="email"
                type="email"
                onBlur={handleOnBlur}
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
                onBlur={handleOnBlur}
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
                onBlur={handleOnBlur}
              />

              <Button
                sx={{ width: "75%", mt: 2 }}
                variant="contained"
                type="submit"
              >
                Create Account
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Have an account? Login</Button>
              </NavLink>
            </form>
          )}
          {loading && <CircularProgress color="secondary" />}
          {user?.email && (
            <Alert sx={{ mt: 4, textAlign: "center" }} severity="success">
              Successfully registered. Please login to continue.
            </Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="100%" src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
