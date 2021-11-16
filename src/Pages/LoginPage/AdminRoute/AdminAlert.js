import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AdminAlert = () => {
  return (
    <div>
      <h1>Sorry You are not an Admin</h1>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button variant="contained" color="primary">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default AdminAlert;
