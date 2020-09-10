import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function StrengthsList() {
  const classes = useStyles();

  return (
    <Grid container justify="center">  
        <List className={classes.root}>
        <ListItem>
            <ListItemAvatar>
            <Avatar><GroupIcon color="primary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Team player"/>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><EmojiObjectsIcon color="primary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Open for new ideas"/>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><LocalLibraryIcon color="primary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Self-motivated for learning new technologies"/>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
            <Avatar><QuestionAnswerIcon color="primary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Social, friendly behavior"/>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar><BatteryChargingFullIcon color="primary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Aware of my own limitations"/>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar><HourglassFullIcon color="primary"/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Flexible and patient"/>
        </ListItem>
        </List>
    </Grid>
  );
}