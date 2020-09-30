import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/styles";

import { logout } from "../../redux/actions";
import { useFirebase } from "../../modules/firebase";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.navbarColor,
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  button: {
    background: theme.palette.primaryLightColor,
    marginLeft: "10px",
    "&:hover": {
      background: theme.palette.primaryDarkColor,
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignOut = () => {
    firebase.doSignOut();
    dispatch(logout());
  };

  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarButtons}>
          {authExists && (
            <>
              <Link
                to="/profile"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button color="inherit" className={classes.button}>
                  Profile
                </Button>
              </Link>
              <Button
                color="inherit"
                className={classes.button}
                onClick={handleSignOut}
              >
                Sign out
              </Button>
            </>
          )}
          {!authExists && (
            <>
              <Button
                color="inherit"
                className={classes.button}
                onClick={handleRegisterOpen}
              >
                Sign up
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={handleLoginOpen}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </Toolbar>
      <Modal
        open={registerOpen}
        onClose={handleRegisterClose}
        aria-labelledby="sign-in-modal"
        aria-describedby="sign-in-modal-description"
      >
        <RegisterModal closeModal={handleRegisterClose} />
      </Modal>
      <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="sign-up-modal"
        aria-describedby="sign-up-modal-description"
      >
        <LoginModal closeModal={handleLoginClose} />
      </Modal>
    </AppBar>
  );
};

export default NavBar;
