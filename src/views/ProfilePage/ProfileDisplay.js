import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DraftsIcon from "@material-ui/icons/Drafts";
import { makeStyles } from "@material-ui/styles";
import FormInput from "../../components/FormInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
    padding: theme.spacing(2),
  },
  avatar: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  content: {
    padding: "20px 0",
  },
  button: {
    background: theme.palette.primaryColor,
    padding: "5px 10px",
  },
}));

const ProfileDisplay = ({
  auth,
  data,
  isInvalid,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={4}>
        <Grid item>
          <Avatar className={classes.avatar}>
            <DraftsIcon className={classes.image} />
          </Avatar>
          <Typography variant="h5">Username: {auth.username}</Typography>
          <Typography variant="h6">First name: {auth.firstName}</Typography>
          <Typography variant="h6">Last name: {auth.lastName}</Typography>
          <Typography variant="h6">Email: {auth.email}</Typography>
          <Typography variant="h6">Age: {auth.age}</Typography>
          <Typography variant="h6">Country: {auth.country}</Typography>
        </Grid>
        <Grid item>
          <FormInput
            label="Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <FormInput
            label="Username"
            name="username"
            value={data.firstName}
            onChange={handleChange}
          />
          <FormInput
            label="Username"
            name="username"
            value={data.lastName}
            onChange={handleChange}
          />
          <FormInput
            label="Username"
            name="username"
            value={data.email}
            onChange={handleChange}
          />
          <Button
            className={classes.button}
            onClick={handleSubmit}
            disabled={isInvalid}
          >
            Edit user
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileDisplay;
