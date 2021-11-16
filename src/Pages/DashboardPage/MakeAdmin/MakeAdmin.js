import React from "react";
import { Button, TextField } from "@mui/material";
const MakeAdmin = () => {
  const [email, setEmail] = React.useState("");
  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("http://localhost:5000/users/makeadmin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Make an Admin</h2>
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
