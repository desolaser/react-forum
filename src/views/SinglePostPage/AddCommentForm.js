import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import { useFirebase } from '../../modules/firebase';

import FormInput from "../../components/FormInput";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 30,
    padding: theme.spacing(4)
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const AddCommentForm = ({ post_id }) => {
  const classes = useStyles();
  const firebase = useFirebase();
  const auth = useSelector(state => state.auth);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    firebase
      .comments()
      .push({
        text,
        user: auth,
      })
      .then(() => {
        firebase
          .comments()
          .limitToLast(1)
          .on("child_added", (childSnapshot) => {
            const key = childSnapshot.key;
            console.log(key);
            firebase.postComments(post_id).update({
              [key]: true,
            })
            .then(() => {
              alert("Comment added");
              window.location.reload(false);
            });
          });
      })
      .catch(function (error) {
        console.error("Error adding comment: ", error);
      });
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Add comment</Typography>
      <FormInput
        label="Text"
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default AddCommentForm;