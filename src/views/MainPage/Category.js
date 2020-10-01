import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "#A8DADC",
    padding: theme.spacing(2),
  },
}));

const Category = ({ category }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper className={classes.category}>
        <Typography variant="subtitle1">{category.name}</Typography>
        <Link to={`/add-topic/${category.id}`}>
          <Button color="primary" variant="contained">
            Add topic
          </Button>
        </Link>
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
    </Box>
  );
};

export default Category;
