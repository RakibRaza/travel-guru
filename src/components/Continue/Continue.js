import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useStyles } from "./ContinueStyle";

const Continue = () => {
  const { googleSignIn, from } = useAuthContext();
  const classes = useStyles();
  const history = useHistory();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      history.replace(from);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h6 className={classes.divider}>
        <span>or</span>
      </h6>
      <Box className={classes.continue}>
        <FaFacebook />
        <Typography>Continue with Facebook</Typography>
      </Box>
      <Box onClick={handleGoogleSignIn} className={classes.continue}>
        <FcGoogle />
        <Typography>Continue with Google</Typography>
      </Box>
      <Box className={classes.continue}>
        <FaGithub style={{ color: "black" }} />
        <Typography>Continue with Github</Typography>
      </Box>
    </>
  );
};

export default Continue;
