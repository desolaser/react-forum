import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import SideBar from "./SideBar";

const useStyles = makeStyles({
  root: {
    background: "#F2F2F2",
  },
});

const Body = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={9}>
          {props.children}
        </Grid>
        <Grid item xs={12} sm={3}>
          <SideBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
