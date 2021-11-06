import React from "react";
import Grid from "@mui/material/Grid";
import Service from "../Home/SingleService/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import { Container, Typography } from "@mui/material";
const services = [
  {
    name: "Fluoride Treatment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quo ipsum voluptatibus commodi dolorum repellat,",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quo ipsum voluptatibus commodi dolorum repellat,",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quo ipsum voluptatibus commodi dolorum repellat, ",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Container sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h6" component="div">
        Our Services
      </Typography>
      <Typography variant="h4" component="div">
        We offer a wide range of dental services
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Service service={service}></Service>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
