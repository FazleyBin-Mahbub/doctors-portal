import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import appointmentbg from "../../../images/appointment-bg.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
const appointmentBanner = {
  backgroundImage: `url(${appointmentbg})`,
  marginTop: 60,
  backgroundBlendMode: "multify",
  backgroundColor: "rgba(45,58,74,0.8)",
  backgroundPosition: "center",
};
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: -120 }}
            src={doctor}
            alt="doctor"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          
          <Typography variant="h6">APPOINTMENT</Typography>
          <Typography variant="h6">Make an appointment today</Typography>
          <Typography variant="h6">Make an appointment today
          
          </Typography>
          <Button variant="contained">Learn More
        
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
