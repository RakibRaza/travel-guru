import {
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavBar from "../NavBar/NavBar";
import logo from "../../images/logo.png";
import { useParams } from "react-router";
import hotels from "../../hotelFakeData";
import Hotel from "../Hotel/Hotel";
import GoogleMap, { MapContainer } from "../GoogleMap/GoogleMap";

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1.5),
  },
  container: {
    marginBottom: theme.spacing(7),
  },
}));
const Booking = () => {
  const classes = useStyles();
  const { hotelId } = useParams();
  const bookingHotels = hotels.filter(
    (hotel) => hotel.hotelId === parseInt(hotelId)
  );

  return (
    <Container>
      <NavBar logo={logo} />
      <Divider className={classes.divider} variant="middle" />
      <Box my={4}>
        <Typography>252 stays 3 guests</Typography>
        <Typography variant="h3">Stay in {bookingHotels[0].place}</Typography>
      </Box>
      <Grid className={classes.container} container spacing={4}>
        <Grid item md={7}>
          <Grid container spacing={3} alignItems="center">
            {bookingHotels.map((hotel) => {
              return <Hotel key={hotel.id} {...hotel} />;
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <GoogleMap />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Booking;
