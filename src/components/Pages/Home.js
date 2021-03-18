import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import banner from "../../images/banner.png";
import NavBar from "../NavBar/NavBar";
import logo from "../../images/logo.svg";
import places from "../../placesFakeData";
import { useHistory } from "react-router";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${banner}') no-repeat center/cover`,
  },
  container: {
    minHeight: "calc(100vh - 64px)",
  },
  imgContainer: {
    position: "relative",
    "& img": {
      width: "100%",
      display: "block",
      cursor: "pointer",
    },
    "& h3": {
      position: "absolute",
      bottom: theme.spacing(2),
      color: "#fff",
      left: theme.spacing(1),
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Container>
        <NavBar logo={logo} color="#fff" />
        <Grid
          container
          alignItems="center"
          spacing={1}
          className={classes.container}
        >
          <Grid item md={4} component={Box} color="#fff">
            <Typography variant="h2">Cox's Bazar</Typography>
            <Typography paragraph>
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </Typography>
            <Button
              component={NavLink}
              to="/booking/1"
              endIcon={<ArrowRightAltIcon />}
              color="primary"
              variant="contained"
              size="large"
            >
              Booking
            </Button>
          </Grid>
          <Grid item md={8}>
            <Grid container spacing={2}>
              {places.map((place) => {
                const { id, img, placeName } = place;
                return (
                  <Grid md={4} key={id} item>
                    <Box
                      onClick={() => history.push(`/place/${id}`)}
                      className={classes.imgContainer}
                    >
                      <img src={img} alt={placeName} />
                      <Typography variant="h3">{placeName}</Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
