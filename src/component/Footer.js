import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import FooterNavList from './FooterNavList'
import DraftsIcon from "@material-ui/icons/Drafts"
import SendIcon from "@material-ui/icons/Send"
import StarBorder from "@material-ui/icons/StarBorder"

const useStyles = makeStyles({
    root: {
        background: "#E1E1E1",        
        padding: 20
    },
})

const NavItems = [
    {
      icon: <StarBorder />,
      name: "Starred"
    },
    {
      icon: <SendIcon />,
      name: "Mail"
    },
    {
      icon: <DraftsIcon />,
      name: "Drafts"
    }
];

const Footer = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={2}>
                    <Typography variant="h5">
                        Discretuum
                    </Typography>
                    <Typography variant="h6">
                        Terms
                    </Typography>
                    <Typography variant="h6">
                        Contact
                    </Typography>
                    <Typography variant="h6">
                        Licenses
                    </Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">
                        Phone
                    </Typography>
                    <Typography variant="h6">
                        +596 1234 5678
                    </Typography>
                    <Typography variant="h6">
                        +596 1234 5678
                    </Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">
                        Email
                    </Typography>
                    <Typography variant="h6">
                        discretuum@discretuum.cl
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h4" align="right">
                        Forum
                    </Typography>
                    <FooterNavList navItems={NavItems} />
                </Grid>
            </Grid>            
            <Divider/>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="p" align="center">
                        Copyright @Discretuum 2020
                    </Typography>
                </Toolbar>
            </AppBar>
        </Paper>
    )
}

export default Footer