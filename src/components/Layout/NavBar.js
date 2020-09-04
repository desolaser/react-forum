import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/styles";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const useStyles = makeStyles({
  root: {
    background: "#457B9D",
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  button: {
    background: "#1D3557",
    marginLeft: "10px",
    "&:hover": {
      background: "#0E1A2B",
    },
  },
});

const NavBar = ({ history }) => {
  const classes = useStyles();
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

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarButtons}>
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
        </div>
      </Toolbar>
      <Modal
        open={registerOpen}
        onClose={handleRegisterClose}
        aria-labelledby="sign-in-modal"
        aria-describedby="sign-in-modal-description"
        history={history}
      >
        <RegisterModal />
      </Modal>
      <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="sign-up-modal"
        aria-describedby="sign-up-modal-description"
      >
        <LoginModal />
      </Modal>
    </AppBar>
  );
};

export default NavBar;
