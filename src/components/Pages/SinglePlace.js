import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import banner from "../../images/banner.png";
import NavBar from "../NavBar/NavBar";
import logo from "../../images/logo.svg";
import places from "../../placesFakeData";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${banner}') no-repeat center/cover`,
  },
  container: {
    minHeight: "calc(100vh - 64px)",
  },
  form: {
    "& input": {
      fontWeight: "bold",
    },
  },
}));
const SinglePlace = () => {
  const classes = useStyles();
  const { id } = useParams();

  const place = places.find((place) => place.id === parseInt(id));

  const { placeName, placeDetails } = place;
  return (
    <div className={classes.root}>
      <Container>
        <NavBar logo={logo} color="#fff" />
        <Grid
          container
          alignItems="center"
          spacing={3}
          className={classes.container}
        >
          <Grid item md={7} component={Box} color="#fff">
            <Typography variant="h2">{placeName}</Typography>
            <Typography>{placeDetails}</Typography>
          </Grid>
          <Grid item md={5}>
            <Box bgcolor="#fff" p={4}>
              <form className={classes.form}>
                <Box mb={2}>
                  <Typography>Origin</Typography>
                  <TextField
                    size="small"
                    defaultValue="Dhaka"
                    variant="filled"
                    fullWidth
                  />
                </Box>
                <Box mb={2}>
                  <Typography>Destination</Typography>
                  <TextField
                    size="small"
                    defaultValue={placeName}
                    variant="filled"
                    fullWidth
                  />
                </Box>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Typography>From</Typography>
                      <KeyboardDatePicker variant="inline" format="dd/MM" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>To</Typography>
                      <KeyboardDatePicker variant="inline" format="dd/MM" />
                    </Grid>
                  </Grid>
                  <Box mt={3}>
                    <Button
                      component={NavLink}
                      to={`/booking/${id}`}
                      type="submit"
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Start Booking
                    </Button>
                  </Box>
                </MuiPickersUtilsProvider>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SinglePlace;
