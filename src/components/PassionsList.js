import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KitchenIcon from '@material-ui/icons/Kitchen';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

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
            <Avatar><DirectionsBikeIcon color="secondary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cycling"/>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><AcUnitIcon color="secondary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Skiing"/>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><KitchenIcon color="secondary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cooking"/>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><SportsBasketballIcon color="secondary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Basketball"/>
        </ListItem>
        </List>
    </Grid>
  );
}