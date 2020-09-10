import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 550
  },
  media: {
    height: '22rem',
  },
});

const MyCard = (props) => {
  const classes = useStyles();
  let newText = props.description.split('\n').map(i => {
    return <p key={i.toString()}>{i}</p>
    });



  return (
    <Card className={classes.root}>
      <CardActionArea onClick={event => window.location.href = props.path}>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.faculty}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            {props.school}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            {newText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MyCard;