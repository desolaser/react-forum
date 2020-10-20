import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { useFirebase } from "../../modules/firebase";

import UserProfile from "./UserProfile";
import Content from "./Content";
import AddCommentForm from "./AddCommentForm";
import CardNote from "../../components/CardNote";
import TitleBar from "../../components/TitleBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
  },
}));

const SinglePostPage = ({ match }) => {
  const classes = useStyles();
  const firebase = useFirebase();
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState({});
  const auth = useSelector((store) => store.auth);
  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;

  useEffect(() => {
    firebase.postWithComments(match.params.id, async (postData) => {
      setPost(postData);
      firebase
        .user(postData.user.id)
        .once("value")
        .then((snapshot) => {
          setUser(snapshot.val());
          setLoading(false);
        });
    });
  }, [firebase, match.params.id]);

  return (
    <Container className={classes.root}>
      <TitleBar
        title={loading ? "Loading post" : `Posts page`}
      />
      {loading ? (
        <CardNote
          title="Loading"
          text="Data is loading, please wait a second"
        />
      ) : (
        <>
          <Grid style={{ marginTop: 20 }} container spacing={2}>
            <UserProfile user={user} />
            <Content post={post} />
          </Grid>
          {post.comments &&
            post.comments.map((comment) => (
              <Grid container spacing={2}>
                <UserProfile user={comment.user} />
                <Content post={comment} />
              </Grid>
            ))}
          {authExists && <AddCommentForm post_id={match.params.id} />}          
        </>
      )}
    </Container>
  );
};

export default SinglePostPage;
