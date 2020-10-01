import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: { background: "#FFFFFF", color: "black", marginTop: 30 },
  button: {
    background: theme.palette.primaryLightColor,
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      background: theme.palette.primaryDarkColor,
    },
  },
}));

const TitleBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h5">Categories</Typography>
        <Button color="primary" className={classes.button}>
          Add Category
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
