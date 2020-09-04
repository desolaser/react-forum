import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { login } from "../../redux/actions";
import { useFirebase } from "../../modules/firebase";

import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: "#1D3557",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  },
  formControl: {
    marginTop: "20px",
  },
  textField: {
    background: "white",
    borderRadius: "10px",
    padding: "5px 10px",
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

const LoginModal = () => {
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
        dispatch(
          login({
            username: authUser.user.username,
            email: authUser.user.email,
            password: authUser.user.password,
            language: authUser.user.language,
          })
        );
        history.push("/");
      })
      .catch((error) => setError(error));
  };

  const isInvalid = email === "" || password === "";

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Login</Typography>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Email
        </Typography>
        <Input
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="name"
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Password
        </Typography>
        <Input
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
      </FormControl>
      <Button
        onClick={handleSubmit}
        className={classes.button}
        disabled={isInvalid}
      >
        Login
      </Button>
      {error && (
        <Paper
          style={{
            backgroundColor: "tomato",
            padding: 10,
            marginTop: 10,
            color: "white",
          }}
        >
          {error.message}
        </Paper>
      )}
    </Paper>
  );
};

export default LoginModal;
