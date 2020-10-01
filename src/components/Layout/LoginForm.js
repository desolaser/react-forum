import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Alert from "../Alert";
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

const LoginModal = ({ data, error, isInvalid, handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Login</Typography>
      <FormInput
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <Button
        color="secondary"
        variant="contained"
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
