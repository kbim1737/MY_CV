import React from 'react';
import Grid from '@material-ui/core/Grid';
import MyCard from './MyCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const SchoolGrid = () => {

    const classes = useStyles();

    return(
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
              <Grid item key={"1"}>
                <MyCard 
                  key={"3"}
                  image={require('./static/ubb.png')}
                  faculty='Faculty of Mathematics and Computer Science'
                  school='Babeș-Bolyai University'
                  description={'2017 - Ongoing \n Computer Science in Hungarian'}
                  path='http://www.cs.ubbcluj.ro/'
                />
              </Grid>
              <Grid item key={"2"}>
                <MyCard 
                  key={"4"}
                  image={require('./static/kolcsey.jpg')}
                  faculty='High School'
                  school='Kölcsey Ferenc National College'
                  description={'2013 - 2017 \n Mathematics and Computer Science specialization'}
                  path='http://www.kolcsey.ro/'
                />
              </Grid>
          </Grid>
        </Grid>
        </Grid>
    );


}


export default SchoolGrid;