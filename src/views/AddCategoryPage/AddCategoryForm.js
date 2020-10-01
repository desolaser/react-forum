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
    background: theme.palette.primaryLightColor,
    color: "white",
    "&:hover": {
      background: theme.palette.primaryDarkColor,
    },
  },
}));

const AddCategoryForm = ({ data, handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Add category</Typography>
        <FormInput
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <FormInput
          label="Description"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        <Button className={classes.button} onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default AddCategoryForm;
