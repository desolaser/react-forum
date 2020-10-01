import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import MainPage from "./views/MainPage";
import PostsPage from "./views/PostsPage";
import SinglePostPage from "./views/SinglePostPage";
import ProfilePage from "./views/ProfilePage";
import AddCategoryPage from "./views/AddCategoryPage";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "Arial", "sans-serif"].join(","),
  },
  palette: {
    navbarColor: "#457B9D",
    primaryLightColor: "#1D3557",
    primaryDarkColor: "#0E1A2B",
    secondaryLightColor: "#E63946",
    secondaryDarkColor: "#A52932",
    disabledColor: "#E2E2E2",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/projects/forum/">
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/posts" exact component={PostsPage} />
            <Route path="/single-post" exact component={SinglePostPage} />
            <PrivateRoute path="/profile" exact component={ProfilePage} />
            <PrivateRoute
              path="/add-category"
              exact
              component={AddCategoryPage}
            />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
