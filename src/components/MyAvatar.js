import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/grid'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Avatar alt="Profile picture" src={require('./static/kep.jpg')} className={classes.large}/>
        <Typography gutterBottom variant="h3" component="h1" >
          <Box fontWeight="fontWeightBold" m={1}>
            KOVÁCS BÉLA-RICHARD
          </Box>
          <Grid container spacing={1}>
        <Grid item xs={12}>
          <Chip avatar={<Avatar>@</Avatar>} variant="outlined" label="richy199898@gmail.com" color="primary"/>
        </Grid>
        <Grid item xs={12}>
          <Chip avatar={<Avatar><LinkedInIcon/></Avatar>} onClick={event => window.location.href = "https://www.linkedin.com/in/belarichardkovacs/"} variant="outlined" label="linkedin.com/in/belarichardkovacs" color="primary"/>
        </Grid>
      </Grid>
      </Typography>
    </div>
  );
}