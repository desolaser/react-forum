import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

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
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Login</Typography>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Email
        </Typography>
        <Input className={classes.textField} id="name" />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6" align="left">
          Password
        </Typography>
        <Input className={classes.textField} id="name" />
      </FormControl>
      <Button className={classes.button}>Login</Button>
    </Paper>
  );
};

export default LoginModal;
