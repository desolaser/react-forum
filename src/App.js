import React from 'react'
import Layout from 'component/Layout'
import {BroswerRouter as Router, Link, Switch} from 'react-router-dom'
import MainPage from 'component/MainPage'
import PostsPage from 'component/PostsPage'
import SinglePostPage from 'component/SinglePostPage'

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Link to="/" component={MainPage}/>
          <Link to="/posts" component={PostsPage}/>
          <Link to="/single-post" component={SinglePostPage}/>
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
