import React from "react";
import { Button, TextField } from "@mui/material";
const MakeAdmin = () => {
  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <h2>Oi Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <Button type="submit" variant="contained" color="primary">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
