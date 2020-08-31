import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import UserProfile from "./UserProfile";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
  },
}));

const user = {
  name: "John Doe",
  role: "Admin",
  posts: [{}, {}, {}],
  comments: [{}, {}, {}],
  createdAt: "06-09-1990",
};

const post = {
  date: "Tuesday at 2:40",
  number: 1,
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
};

const SinglePostPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <UserProfile user={user} />
        <Content post={post} />
      </Grid>
      <Grid container spacing={2}>
        <UserProfile user={user} />
        <Content post={post} />
      </Grid>
      <Grid container spacing={2}>
        <UserProfile user={user} />
        <Content post={post} />
      </Grid>
    </div>
  );
};

export default SinglePostPage;
