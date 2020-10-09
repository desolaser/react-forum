import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { useFirebase } from "../../modules/firebase";

import UserProfile from "./UserProfile";
import Content from "./Content";
import CardNote from "../../components/CardNote";

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

  useEffect(() => {
    firebase.postWithComments(match.params.id, async (postData) => {
      const toWait = [];
      postData.comments &&
        postData.comments.forEach((comment) => {
          const method = firebase.commentWithUser(comment, (commentData) => {
            comment = commentData;
          });
          toWait.push(method);
        });
      await Promise.all(toWait);
      setPost(postData);
      firebase
        .user(postData.user)
        .once("value")
        .then((snapshot) => {
          setUser(snapshot.val());
          setLoading(false);
        });
    });
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <CardNote
          title="Loading"
          text="Data is loading, please wait a second"
        />
      ) : (
        <>
          <Grid container spacing={2}>
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
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
