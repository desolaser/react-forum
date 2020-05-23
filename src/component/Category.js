import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '30px 15px'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
    category: {
      background: '#A8DADC',
      padding: 10
    },
    image: {
      width: 50,
      height: 50,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));

const Category = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Link to="/posts">
                <Paper className={classes.category}>
                    <Typography variant="subtitle1">
                        Javascript
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <DraftsIcon/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs={8} container direction="column" spacing={4}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        React
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        A facebook framework
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Posts</Typography>
                                <Typography variant="body2">172</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Latest posts</Typography>
                                <Typography variant="body2">Create a react app</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <DraftsIcon/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs={8} container direction="column" spacing={4}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        React
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        A facebook framework
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Posts</Typography>
                                <Typography variant="body2">172</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Latest posts</Typography>
                                <Typography variant="body2">Create a angular project from scratch</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </div>
    )
}

export default Category