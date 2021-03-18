import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles((theme) => ({
  room: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  hotel: { fontWeight: "bold" },
  price: {
    fontWeight: "bold",
  },
  rating: { fontWeight: "bold" },
}));
const Hotel = ({
  name,
  img,
  kitchen,
  flexibility,
  guest,
  bedrooms,
  beds,
  baths,
  rating,
  price,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item sm={6}>
        <img style={{ width: "100%", display: "block" }} src={img} alt={name} />
      </Grid>
      <Grid item sm={6}>
        <Typography className={classes.hotel} gutterBottom variant="h5">
          {name}
        </Typography>
        <Box className={classes.room}>
          <Typography variant="subtitle2">{guest} guests</Typography>
          <Typography variant="subtitle2">{bedrooms} bedrooms</Typography>
          <Typography variant="subtitle2">{beds} beds</Typography>
          <Typography variant="subtitle2">{baths} baths</Typography>
        </Box>
        <Typography paragraph>{kitchen}</Typography>
        <Typography paragraph>{flexibility}</Typography>
        <Box className={classes.room}>
          <Box display="flex">
            <StarIcon color="primary" />
            <Typography className={classes.rating}>{rating}</Typography>
          </Box>
          <Typography>
            <span className={classes.price}>${price}/</span> night
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Hotel;
