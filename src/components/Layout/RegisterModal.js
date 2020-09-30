import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import { useFirebase } from "../../modules/firebase";
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

const RegisterModal = ({ closeModal }) => {
  const classes = useStyles();
  const firebase = useFirebase();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          username,
          firstName,
          secondName,
          email,
          age,
          country,
        });
        alert("You have been registered successfully, try to log in");
        closeModal();
      })
      .catch((error) => setError(error));
  };

  const isInvalid =
    username === "" ||
    firstName === "" ||
    secondName === "" ||
    email === "" ||
    age === "" ||
    country === "" ||
    password === "" ||
    password !== repeatPassword;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Register</Typography>
      <FormInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormInput
        label="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <FormInput
        label="Second name"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <FormInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <FormInput
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormInput
        label="Repeat password"
        type="password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
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

export default RegisterModal;
