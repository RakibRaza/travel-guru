import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    boxShadow: "none",
  },
  logo: {
    width: "100px",
  },
  drawer: {
    width: "250px",
  },
}));

const NavBar = ({ logo, color }) => {
  const classes = useStyles();
  const { logOut } = useAuthContext();
  const { currentUserInfo } = useAuthContext();
  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Box style={{ flexGrow: 1 }}>
            <img className={classes.logo} src={logo} alt="Travel Guru" />
          </Box>
          <Hidden smDown>
            <Box color={color}>
              <Button color="inherit">News</Button>
              <Button color="inherit">Destination</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Contact</Button>
            </Box>
            <Box ml={6}>
              {currentUserInfo ? (
                <Button
                  onClick={handleLogOut}
                  color="primary"
                  variant="contained"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  component={NavLink}
                  to="/login"
                  color="primary"
                  variant="contained"
                >
                  Login
                </Button>
              )}
            </Box>
            <Box color={color}>
              <Button color="inherit">{currentUserInfo?.displayName}</Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box color={color}>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <List disablePadding className={classes.drawer}>
                <ListItem button>
                  <ListItemText primary="News" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Destination" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
