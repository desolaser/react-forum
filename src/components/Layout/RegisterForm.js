import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import FormInput from "../FormInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  },
  button: {
    marginTop: "20px",
    color: "white",
  },
}));

const RegisterForm = ({
  data,
  error,
  isInvalid,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Register</Typography>
      <FormInput
        label="Username"
        name="username"
        value={data.username}
        onChange={handleChange}
      />
      <FormInput
        label="First name"
        name="firstName"
        value={data.firstName}
        onChange={handleChange}
      />
      <FormInput
        label="Last name"
        name="lastName"
        value={data.lastName}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <FormInput
        label="Age"
        name="age"
        value={data.age}
        onChange={handleChange}
      />
      <FormInput
        label="Country"
        name="country"
        value={data.country}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <FormInput
        label="Repeat password"
        type="password"
        name="repeatPassword"
        value={data.repeatPassword}
        onChange={handleChange}
      />
      <Button
        color="secondary"
        variant="contained"
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

export default RegisterForm;
