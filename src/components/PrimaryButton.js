import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  background: theme.palette.primaryLightColor,
  color: "white",
  "&:hover": {
    background: theme.palette.primaryDarkColor,
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} {...props}>
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
