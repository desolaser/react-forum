import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    toolbar: {
        textAlign: 'right'
    }
})

const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Button color="inherit">Sign up</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar