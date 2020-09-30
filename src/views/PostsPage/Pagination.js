import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#E63946",
    minWidth: 0,
    margin: "0 5px",
    color: "white",
    "&:hover": {
      background: "#A52932",
    },
  },
}));

const FilterBar = () => {
  const classes = useStyles();
  return (
    <Grid items xs={12} sm={11}>
      <Button className={classes.button}>
        <ArrowLeftIcon />
      </Button>
      <Button className={classes.button}>1</Button>
      <Button className={classes.button}>2</Button>
      <Button className={classes.button}>3</Button>
      <Button className={classes.button}>...</Button>
      <Button className={classes.button}>69</Button>
      <Button className={classes.button}>
        <ArrowRightIcon />
      </Button>
    </Grid>
  );
};

export default FilterBar;
