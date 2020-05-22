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
      <Layout>
        <Router>
          <Switch>
            <Route to="/" component={MainPage}/>
            <Route to="/posts" component={PostsPage}/>
            <Route to="/single-post" component={SinglePostPage}/>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App
