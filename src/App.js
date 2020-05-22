import React from 'react'
import Layout from './component/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './component/MainPage'
import PostsPage from './component/PostsPage'
import SinglePostPage from './component/SinglePostPage'

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route to="/" component={MainPage}/>
          <Route to="/posts" component={PostsPage}/>
          <Route to="/single-post" component={SinglePostPage}/>
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
