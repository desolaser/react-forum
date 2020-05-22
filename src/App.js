import React from 'react'
import Layout from 'component/Layout'
import {BroswerRouter as Router, Link, Switch} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Link to="/" component={}/>
          <Link to="/posts" component={}/>
          <Link to="/single-post" component={}/>
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
