import React from 'react'
import { makeStyles } from '@material-ui/styles'
import SideBar from './SideBar'

const useStyles = makeStyles({
    root: {
        background: "#F2F2F2"
    }
})

const Body = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                {props.children}
            </div>
            <SideBar/>
        </div>
    )
}

export default Body