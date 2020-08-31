import React from "react";
import { makeStyles } from "@material-ui/styles";
import FilterBar from "./FilterBar";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
  },
}));

const PostsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FilterBar />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostsPage;
