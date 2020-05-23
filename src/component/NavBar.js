import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        background: '#457B9D',
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
    button: {
        background: '#1D3557',
        marginLeft: '10px',
        '&:hover': {
            background: '#0E1A2B'
        }
    }
})

const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.toolbarButtons}>
                    <Button color="inherit" className={classes.button}>Sign up</Button>
                    <Button color="inherit" className={classes.button}>Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar