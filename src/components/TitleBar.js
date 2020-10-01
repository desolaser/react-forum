import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: { background: "#FFFFFF", color: "black", marginTop: 30 },
  button: {
    marginLeft: "auto",
  },
}));

const TitleBar = ({ title, buttonText, onButtonClick }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h5">{title}</Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={onButtonClick}
          className={classes.button}
        >
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
