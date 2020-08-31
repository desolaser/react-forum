import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 20px",
    background: "#1D3557",
  },
  button: {
    background: "#E63946",
    minWidth: 0,
    margin: "0 5px",
    color: "white",
    "&:hover": {
      background: "#A52932",
    },
  },
  filterTitle: {
    color: "white",
  },
}));

const FilterBar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
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
        <Grid items xs={12} xs={1} className={classes.filterTitle}>
          <ArrowDropDownIcon />
          <Typography variant="p">Filters</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FilterBar;
