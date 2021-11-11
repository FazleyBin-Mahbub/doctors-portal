import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";
const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleOpen = () => setOpenBooking(true);
  const handleClose = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={12} md={4} sm={6}>
        <Paper elevation={2} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        closeModal={handleClose}
        openbooking={openBooking}
      />
    </>
  );
};

export default Booking;
