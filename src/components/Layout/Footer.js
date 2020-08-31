import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MemoryIcon from "@material-ui/icons/Memory";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#1D3557",
    color: "white",
    padding: 20,
  },
  icons: {
    background: "#E63946",
  },
  logo: {
    display: "inline-block",
    float: "right",
  },
  footerTitle: {
    display: "inline-block",
    float: "right",
    padding: 20,
  },
  footerIcons: {
    padding: 40,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={2}>
          <Typography variant="h5">Discretuum</Typography>
          <Typography variant="h6">Terms</Typography>
          <Typography variant="h6">Contact</Typography>
          <Typography variant="h6">Licenses</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h5">Phone</Typography>
          <Typography variant="h6">+596 1234 5678</Typography>
          <Typography variant="h6">+596 1234 5678</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h5">Email</Typography>
          <Typography variant="h6">discretuum@discretuum.cl</Typography>
        </Grid>
        <Grid item sm={6}>
          <img
            src={process.env.PUBLIC_URL + "/logo_sm.png"}
            alt="logo"
            className={classes.logo}
          />
          <Typography
            variant="h4"
            align="right"
            className={classes.footerTitle}
          >
            Forum
          </Typography>
          <Grid container justify="flex-end" className={classes.footerIcons}>
            <Grid item sm={1}>
              <Avatar className={classes.icons}>
                <MemoryIcon />
              </Avatar>
            </Grid>
            <Grid item sm={1}>
              <Avatar className={classes.icons}>
                <MemoryIcon />
              </Avatar>
            </Grid>
            <Grid item sm={1}>
              <Avatar className={classes.icons}>
                <MemoryIcon />
              </Avatar>
            </Grid>
            <Grid item sm={1}>
              <Avatar className={classes.icons}>
                <MemoryIcon />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="body1" align="center">
        Copyright @Discretuum 2020
      </Typography>
    </Paper>
  );
};

export default Footer;
