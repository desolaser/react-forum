import React from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "./Header";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F2F2F2",
  },
  content: {
    width: "90%",
    margin: "auto",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Header />
        <NavBar />
        <Body>{props.children}</Body>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
