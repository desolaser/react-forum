import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import FormInput from "../../components/FormInput";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: 30 },
  paper: {
    padding: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const AddTopicForm = ({ data, handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Add post</Typography>
        <FormInput
          label="Title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <FormInput
          label="Text"
          name="text"
          value={data.text}
          onChange={handleChange}
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
    </Container>
  );
};

export default AddTopicForm;
