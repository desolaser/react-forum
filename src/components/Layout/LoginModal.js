import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";

import { login } from "../../redux/actions";
import { useFirebase } from "../../modules/firebase";
import Alert from "../Alert";
import FormInput from "../FormInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: "#1D3557",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  },
  button: {
    background: "#E63946",
    color: "white",
    marginTop: "20px",
    "&:hover": {
      background: "#A52932",
    },
  },
}));

const LoginModal = ({ closeModal }) => {
  const classes = useStyles();
  const firebase = useFirebase();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        const id = authUser.user.uid;
        firebase
          .user(id)
          .once("value")
          .then((snapshot) => {
            dispatch(
              login({
                username: snapshot.child("username").val(),
                firstName: snapshot.child("firstName").val(),
                lastName: snapshot.child("lastName").val(),
                email: authUser.user.email,
                age: snapshot.child("age").val(),
                country: snapshot.child("country").val(),
              })
            );
          });
        history.push("/");
        closeModal();
        alert("You are logged in now");
      })
      .catch((error) => setError(error));
  };

  const isInvalid = email === "" || password === "";

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Login</Typography>
      <FormInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        className={classes.button}
        disabled={isInvalid}
      >
        Login
      </Button>
      {error && <Alert>{error.message}</Alert>}
    </Paper>
  );
};

export default LoginModal;
