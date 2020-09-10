import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function SkillChips() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={10}>
            <Grid item containter  direction="row" spacing={10}>
                <Grid item  xs={12} >
                    <Typography gutterBottom variant="h5" component="h2">
                        Advanced skills
                        </Typography>
                    <div className={classes.root}>    
                        <Chip avatar={<Avatar src={require('./static/js.png')}/>} variant="outlined" label="JavaScript" color="primary"/>
                        <Chip avatar={<Avatar src={require('./static/react.png')}/>} variant="outlined" label="React.js" />
                        <Chip avatar={<Avatar src={require('./static/node.jpg')}/>} variant="outlined" label="Node.js"color="secondary"/>
                        <Chip avatar={<Avatar src={require('./static/mongo.png')}/>} variant="outlined" label="MongoDB" color="primary"/>
                        <Chip avatar={<Avatar src={require('./static/css.png')}/>} variant="outlined" label="CSS" />
                        <Chip avatar={<Avatar src={require('./static/html.png')}/>} variant="outlined" label="HTML" color="secondary"/>
                    </div>
                </Grid>
                <Grid item  xs={12}>
                <Typography gutterBottom variant="h5" component="h2">
                    Novice skills
                </Typography>
                    <div className={classes.root}> 
                        <Chip avatar={<Avatar src={require('./static/c.png')}/>} variant="outlined" label="C" color="secondary"/>
                        <Chip avatar={<Avatar src={require('./static/cpp.png')}/>} variant="outlined" label="C++"/>
                        <Chip avatar={<Avatar src={require('./static/java.png')}/>} variant="outlined" label="Java" color="primary"/>
                        <Chip avatar={<Avatar src={require('./static/python.png')}/>} variant="outlined" label="Python" color="secondary"/>
                        <Chip avatar={<Avatar src={require('./static/sql.png')}/>} variant="outlined" label="Sql" />
                        <Chip avatar={<Avatar src={require('./static/matlab.png')}/>} variant="outlined" label="Matlab" color="primary"/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}