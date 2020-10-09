import React, { useEffect, useState } from "react";
import { useFirebase } from "../../modules/firebase";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";

import FilterBar from "./FilterBar";
import Post from "./Post";

import CardNote from "../../components/CardNote";
import TitleBar from "../../components/TitleBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const PostsPage = ({ match, history }) => {
  const classes = useStyles();
  const firebase = useFirebase();
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState({});
  const auth = useSelector((store) => store.auth);
  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;

  useEffect(() => {
    firebase.topicWithPosts(match.params.id, (data) => {
      setTopic(data);
      setLoading(false);
    });
  });

  const addPost = () => {
    history.push("/add-post/" + topic.id);
  };

  return (
    <Container className={classes.root}>
      <TitleBar
        title={loading ? "Loading posts" : `${topic.name} posts`}
        buttonText="Create Post"
        onButtonClick={authExists && addPost}
      />
      <FilterBar />
      {loading ? (
        <CardNote
          title="Loading"
          text="Data is loading, please wait a second"
        />
      ) : topic.posts !== undefined ? (
        Object.keys(topic.posts).map((pid) => (
          <Post key={pid} post={topic.posts[pid]} />
        ))
      ) : (
        <CardNote
          title="No posts"
          text="There are not posts on this category, create a post if you want."
          buttonText="Create Post"
          onClick={authExists && addPost}
        />
      )}
    </Container>
  );
};

export default PostsPage;
