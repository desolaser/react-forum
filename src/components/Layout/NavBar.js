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
    background: theme.palette.primary.light,
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  button: {
    marginLeft: "10px",
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
    alert("You logged out");
  };

  const LoginContent = React.forwardRef((props, ref) => (
    <LoginModal {...props} ref={ref} />
  ));
  const RegisterContent = React.forwardRef((props, ref) => (
    <RegisterModal {...props} ref={ref} />
  ));

  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarButtons}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Home
            </Button>
          </Link>
          {authExists && (
            <>
              <Link
                to="/profile"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  Profile
                </Button>
              </Link>
              <Button
                color="primary"
                variant="contained"
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
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={handleRegisterOpen}
              >
                Sign up
              </Button>
              <Button
                color="primary"
                variant="contained"
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
        <RegisterContent closeModal={handleRegisterClose} />
      </Modal>
      <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="sign-up-modal"
        aria-describedby="sign-up-modal-description"
      >
        <LoginContent closeModal={handleLoginClose} />
      </Modal>
    </AppBar>
  );
};

export default NavBar;
