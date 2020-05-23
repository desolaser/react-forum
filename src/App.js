import React from 'react'
import Layout from './component/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import MainPage from './component/MainPage'
import PostsPage from './component/PostsPage'
import SinglePostPage from './component/SinglePostPage'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/projects/forum/">
        <Layout>
            <Switch>
              <Route path="/" exact component={MainPage}/>
              <Route path="/posts" exact component={PostsPage}/>
              <Route path="/single-post" exact component={SinglePostPage}/>
            </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
