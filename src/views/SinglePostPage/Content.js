import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    minHeight: "450px",
  },
  date: {
    padding: "10px 0",
  },
  content: {
    padding: "20px 0",
  },
}));

const Content = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={9}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.date}>
          <Grid item xs={10}>
            <Typography variant="p">{post.date}</Typography>
          </Grid>
          <Grid item xs={2} align="right">
            <Typography variant="p">#{post.number}</Typography>
          </Grid>
        </Grid>
        <Divider />
        <div className={classes.content}>
          <Typography variant="p">{post.text}</Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Content;
