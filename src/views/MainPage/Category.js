import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Topic from "./Topic";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 0",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  category: {
    background: "#A8DADC",
    padding: theme.spacing(2),
  },
}));

const Category = ({ category }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.category}>
        <Typography variant="subtitle1">{category.name}</Typography>
      </Paper>
      {category.topics ? (
        category.topics.map((topic) => <Topic key={topic.id} topic={topic} />)
      ) : (
        <Paper className={classes.paper}>
          <Typography variant="body1">
            No hay tópicos disponibles en esta categoría, agregue uno.
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Category;
