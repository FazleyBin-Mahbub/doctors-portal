import React from "react";
import Grid from "@mui/material/Grid";

import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const banner = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const centerPosition = {
  display: "flex",
  height: "450px",
  alignItems: "center",
};
const Banner = () => {
  return (
    <Container style={banner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={centerPosition}>
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "gray", fontSize: "14", my: 5,fontWeight:800, fontFamily: "Montserrat" }}
            >
              lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit
              lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            </Typography>
            <Button variant="contained" color="primary">
              GET APPOINTMENT
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={centerPosition}>
          <img width="500" src={chair} alt="bg" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
