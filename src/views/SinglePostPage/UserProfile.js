import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import DraftsIcon from "@material-ui/icons/Drafts";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    minHeight: "450px",
  },
  avatar: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  date: {
    padding: "10px 0",
  },
  content: {
    padding: "20px 0",
  },
}));

const UserProfile = ({ user }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={3}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DraftsIcon className={classes.image} />
        </Avatar>
        <Typography variant="h5" align="center">
          {user.name}
        </Typography>
        <Typography variant="h6" align="center">
          {user.role}
        </Typography>
        <Typography variant="subtitle1">Posts: {user.posts.length}</Typography>
        <Typography variant="subtitle1">
          Comments: {user.comments.length}
        </Typography>
        <Typography variant="subtitle1">Joined: {user.createdAt}</Typography>
      </Paper>
    </Grid>
  );
};

export default UserProfile;
