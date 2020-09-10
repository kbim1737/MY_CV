import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LanguageDivider() {
  const classes = useStyles();

  return (
    <Grid container justify="center">  
        <List className={classes.root}>
        <ListItem>
            <ListItemAvatar>
            <Avatar src={require('./static/hun.png')}/>
            </ListItemAvatar>
            <ListItemText primary="Hungarian" secondary="Native" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar src={require('./static/ro.png')}/>
            </ListItemAvatar>
            <ListItemText primary="Romanian" secondary="Advanced" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar src={require('./static/eng.jpg')}/>
            </ListItemAvatar>
            <ListItemText primary="English" secondary="Advanced" />
        </ListItem>
        </List>
    </Grid>
  );
}