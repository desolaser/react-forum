import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        backgroundImage: "linear-gradient(to bottom, #FFFFFF, #C3CFE2)",
    },
    title: {
        padding: "40px 20px",
        display: "inline-block"
    },
    logo: {
        float: "right",
        maxHeight: "100px"
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <header className={classes.root}>
            <Typography variant="h2" align="left" className={classes.title}>
                Forum
            </Typography>
            <div className={classes.logo}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
            </div>
        </header>
    )
}

export default Header