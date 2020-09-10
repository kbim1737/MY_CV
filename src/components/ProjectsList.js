import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProjectsList() {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant="h5" component="h2">
            University projects
        </Typography> 
        <Typography variant="body2" color="textSecondary" component="span">
        During my studies I have been facing different assignments, individual
        and group projects which helped me to develop my problem solving
        skills and to become a better programmer. I would like mention a few of
        them:
        </Typography> 
        <List className={classes.root}>
        <ListItem>
            <ListItemAvatar>
            <Avatar><CodeIcon/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Data structures project" secondary="I created an application that uses and
                represents doubly linked list's advantages and specialties, using C
                as programming language" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><CodeIcon/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Databases project" secondary="planning and creating a database for a shoe store
                using Microsoft SQL Server" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><CodeIcon/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Java project" secondary="I made a desktop application, game, named Sushi Master,
              using JavaFX for creating a GUI" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><CodeIcon/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Web programming project" secondary="I created a client-server RESTful web
            application using Node.js as back-end, HTML, CSS, JavaScript as
            front-end, MySQL for storing data, observing the rules of the MVC
            architecture" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><CodeIcon/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Group project" secondary="I have been working on a bigger project in a group of 5,
              as front-end developer in React.js creating a web application for
              renting and borrowing books" />
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>
        </Grid>
    </Grid>
  );
}