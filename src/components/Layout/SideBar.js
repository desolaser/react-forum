import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import LastPost from "./LastPost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
  },
  title: {
    padding: 10,
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.title}>
        <Typography variant="h5" align="center">
          Latest posts
        </Typography>
      </Paper>
      <LastPost />
      <LastPost />
      <LastPost />
      <LastPost />
      <LastPost />
      <LastPost />
      <LastPost />
      <LastPost />
    </div>
  );
};

export default SideBar;
