import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import { useFirebase } from "../../modules/firebase";

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

const RegisterModal = () => {
  const classes = useStyles();
  const firebase = useFirebase();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          username,
          email,
          language,
        });
        alert("You have been registered successfully, try to log in");
      })
      .catch((error) => setError(error));
  };

  const isInvalid =
    username === "" ||
    password === "" ||
    password !== repeatPassword ||
    language === "";

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Register</Typography>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Username
        </Typography>
        <Input
          className={classes.textField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Email
        </Typography>
        <Input
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Password
        </Typography>
        <Input
          className={classes.textField}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Repeat Password
        </Typography>
        <Input
          className={classes.textField}
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          First language
        </Typography>
        <Input
          className={classes.textField}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </FormControl>
      <Button
        className={classes.button}
        onClick={handleSubmit}
        disabled={isInvalid}
      >
        Register
      </Button>
      {error && (
        <Paper
          style={{
            backgroundColor: "tomato",
            padding: 10,
            color: "white",
          }}
        >
          {error.message}
        </Paper>
      )}
    </Paper>
  );
};

export default RegisterModal;
