import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/styles'
import RegisterModal from './RegisterModal'

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
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.toolbarButtons}>
                    <Button color="inherit" className={classes.button} onClick={handleOpen}>Sign up</Button>
                    <Button color="inherit" className={classes.button}>Login</Button>
                </div>
            </Toolbar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="sign-up-modal"
                aria-describedby="sign-up-modal-description"
            >
                <RegisterModal/>
            </Modal>
        </AppBar>
    )
}

export default NavBar