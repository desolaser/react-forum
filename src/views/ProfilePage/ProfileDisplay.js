import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DraftsIcon from "@material-ui/icons/Drafts";
import { makeStyles } from "@material-ui/styles";
import FormInput from "../../components/FormInput";
import Alert from "../../components/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 15px",
    padding: theme.spacing(4),
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
    color: "white",
    marginTop: "20px",
    padding: "5px 10px",
  },
  disabled: {
    background: theme.palette.disabledColor,
    marginTop: "20px",
    padding: "5px 10px",
  },
}));

const ProfileDisplay = ({
  auth,
  data,
  error,
  isInvalid,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
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
        <Grid item xs={8}>
          <Typography variant="h4">My profile</Typography>
          <FormInput
            label="Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <FormInput
            label="First Name"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <FormInput
            label="Age"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
          <FormInput
            label="Country"
            name="country"
            value={data.country}
            onChange={handleChange}
          />
          <Button
            color="primary"
            variant="contained"
            className={isInvalid ? classes.disabled : classes.button}
            onClick={handleSubmit}
            disabled={isInvalid}
          >
            Edit user
          </Button>
          {error && <Alert>{error.message}</Alert>}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileDisplay;
