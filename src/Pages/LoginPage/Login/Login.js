import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import login from "../../../images/login.png";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signinUser, loading, error, googleSignin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    signinUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignin = () => {
    googleSignin(location, history);
  }
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          {!loading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Email"
                type="email"
                variant="standard"
                required
                name="email"
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
          )}
          {loading && <CircularProgress color="secondary" />}
          {user?.email && (
            <Alert sx={{ mt: 4, textAlign: "center" }} severity="success">
              Successfully logged in.
            </Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}

          <p>-------------------------</p>
          <Button onClick={handleGoogleSignin} variant="contained">Google</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="100%" src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
