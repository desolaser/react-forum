import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '30px 15px',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        minHeight: '450px'
    },
    avatar: {
        width: '100%',
        height: 'auto',
        marginBottom: '20px'
    },    
    image: {
        width: '100%',
        height: 'auto',
    },
    date: {
        padding: '10px 0'
    },
    content: {
        padding: '20px 0'
    }
}))

const SinglePostPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon className={classes.image}/>
                        </Avatar>
                        <Typography variant="h5" align="center">
                            John Doe
                        </Typography>
                        <Typography variant="h6" align="center">
                            Admin
                        </Typography>
                        <Typography variant="subtitle1">Posts: 13</Typography>
                        <Typography variant="subtitle1">Comments: 27</Typography>
                        <Typography variant="subtitle1">Joined: 06-09-1990</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} className={classes.date}>
                            <Grid item xs={10}>
                                <Typography variant="p">Tuesday at 2:40</Typography>
                            </Grid>
                            <Grid item xs={2} align="right">
                                <Typography variant="p">#1</Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <div className={classes.content}>
                            <Typography variant="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions 
                                of Lorem Ipsum.
                            </Typography>
                        </div>                        
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SinglePostPage