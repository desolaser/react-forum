import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Pagination from "./Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 20px",
    background: theme.palette.primary.dark,
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
        <Pagination />
        <Grid items xs={12} sm={1} className={classes.filterTitle}>
          <ArrowDropDownIcon />
          <Typography variant="p">Filters</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FilterBar;
