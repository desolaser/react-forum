import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  backgroundColor: theme.palette.primaryLightColor,
  padding: 10,
  marginTop: 10,
  color: "white",
}));

const Alert = ({ message }) => {
  const classes = useStyles();
  return <Paper className={classes.root}>{message}</Paper>;
};

export default Alert;
