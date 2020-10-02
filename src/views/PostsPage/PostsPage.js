import React from "react";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import FilterBar from "./FilterBar";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
  },
}));

const PostsPage = ({ match }) => {
  const classes = useStyles();
  console.log(match.params.id);
  return (
    <Container className={classes.root}>
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
    </Container>
  );
};

export default PostsPage;
