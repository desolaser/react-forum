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

const Topic = ({ topic }) => {
  const classes = useStyles();
  return (
    <Link to="/posts">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <DraftsIcon />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={8} container direction="column" spacing={4}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {topic.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {topic.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1">Posts</Typography>
              <Typography variant="body2">{topic.posts.length}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1">Latest posts</Typography>
              <Typography variant="body2">{topic.posts[-1].name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default Topic;
