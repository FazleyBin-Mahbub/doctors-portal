import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  let { user, loading ,admin} = useAuth();
  if (loading) {
    return <CircularProgress color="secondary" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email  &&admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/adminalert",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
