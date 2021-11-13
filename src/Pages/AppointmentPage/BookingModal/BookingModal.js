import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({ openbooking, closeModal, booking, date }) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const handleBookSubmit = (e) => {
    e.preventDefault();
    // collect data

    // send data to server
    closeModal();
    alert("Booking Successful");
  };
  return (
    <Modal
      open={openbooking}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <strong> {name}</strong>
        </Typography>
        <form onSubmit={handleBookSubmit}>
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={time}
            disabled
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={user.displayName}
            size="small"
            type="text"
            required
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Phone Number"
            size="small"
            type="number"
            required
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={user.email}
            size="small"
            type="email"
            required
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            disabled
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type="submit" sx={{ mr: 0 }} variant="outlined">
            Send
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
