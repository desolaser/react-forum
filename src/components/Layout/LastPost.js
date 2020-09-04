import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  image: {
    width: 50,
    height: 50,
  },
}));

const LastPost = () => {
  const classes = useStyles();
  return (
    <Link to="/single-post">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <DraftsIcon />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={12} container direction="column" spacing={4}>
              <Grid item xs>
                <Typography variant="subtitle1">
                  React Redux tutorial
                </Typography>
                <Typography variant="body2">React - Javascript</Typography>
                <Typography variant="body2">John Doe</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant="caption" gutterBottom>
              Replies: 0
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Typography variant="caption" gutterBottom>
              12-24-2012
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default LastPost;
