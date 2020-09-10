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
                        <Chip avatar={<Avatar>JS</Avatar>} variant="outlined" label="JavaScript" color="primary"/>
                        <Chip avatar={<Avatar>R</Avatar>} variant="outlined" label="React.js" />
                        <Chip avatar={<Avatar>N</Avatar>} variant="outlined" label="Node.js"color="secondary"/>
                        <Chip avatar={<Avatar>M</Avatar>} variant="outlined" label="MongoDB" color="primary"/>
                        <Chip avatar={<Avatar>C</Avatar>} variant="outlined" label="CSS" />
                        <Chip avatar={<Avatar>H</Avatar>} variant="outlined" label="HTML" color="secondary"/>
                    </div>
                </Grid>
                <Grid item  xs={12}>
                <Typography gutterBottom variant="h5" component="h2">
                    Novice skills
                </Typography>
                    <div className={classes.root}> 
                        <Chip avatar={<Avatar>C</Avatar>} variant="outlined" label="C" color="secondary"/>
                        <Chip avatar={<Avatar>C</Avatar>} variant="outlined" label="C++"/>
                        <Chip avatar={<Avatar>J</Avatar>} variant="outlined" label="Java" color="primary"/>
                        <Chip avatar={<Avatar>P</Avatar>} variant="outlined" label="Python" color="secondary"/>
                        <Chip avatar={<Avatar>S</Avatar>} variant="outlined" label="Sql" />
                        <Chip avatar={<Avatar>M</Avatar>} variant="outlined" label="Matlab" color="primary"/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}