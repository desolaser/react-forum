import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
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
}))

const Post = () => {
    const classes = useStyles()
    return (
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
                                Create a react project from scratch
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                John Doe - 12-24-2012
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">Replies</Typography>
                        <Typography variant="body2">18</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">Views</Typography>
                        <Typography variant="body2">234</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Post