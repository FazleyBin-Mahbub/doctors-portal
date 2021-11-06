import React from "react";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const Service = ({ service }) => {
  const { name, desc, img } = service;

  return (
    <div>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mt: 5, mx: 8 }}>
          <CardMedia
            component="img"
            style={{
              width: "auto",
              height: "80px",
              margin: "0 auto",
            }}
            image={img}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Service;
