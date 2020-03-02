import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SONG_TYPES } from '../../data/Constants';
import { NavLink } from 'react-router-dom';

const cards = SONG_TYPES; 
const useStyles = makeStyles(theme => ({
 icon: {
   marginRight: theme.spacing(2),
 },
 heroContent: {
   backgroundColor: theme.palette.background.paper,
   padding: theme.spacing(8, 0, 6),
 },
 heroButtons: {
   marginTop: theme.spacing(4),
 },
 cardGrid: {
   paddingTop: theme.spacing(8),
   paddingBottom: theme.spacing(8),
 },
 card: {
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
 },
 cardMedia: {
   paddingTop: '56.25%', // 16:9
 },
 cardContent: {
   flexGrow: 1,
 },
 footer: {
   backgroundColor: theme.palette.background.paper,
   padding: theme.spacing(6),
 },
}));

const Home: React.FC = (props) => { 
   
  const classes = useStyles();
  return (
   <div>
   <div className={classes.heroContent}>
     <Container maxWidth="sm">
       <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
         Numerals
       </Typography>
       <Typography variant="h5" align="center" color="textSecondary" paragraph>
         Numerals simplfies songwriting process by exposing the fundamentals in an easy to use interface. Use some of the pre-configured templates below to get going!
       </Typography>
       <div className={classes.heroButtons}>
         <Grid container spacing={2} justify="center">
           <Grid item>
           <NavLink activeClassName="active" to="/new/empty">
             <Button variant="contained" color="primary">
               Build Now
             </Button>
             </NavLink>
           </Grid>
           <Grid item>
            <NavLink activeClassName="active" to={"/songwriting101"}>
               <Button variant="outlined" color="primary">
                  Songwriting 101
               </Button>
             </NavLink>
           </Grid>
         </Grid>
       </div>
     </Container>
   </div>
   <Container className={classes.cardGrid} maxWidth="md">
     {/* End hero unit */}
     <Grid container spacing={4}>
       {cards.map(card => (
         <Grid item key={card.key} xs={12} sm={6} md={4}>
           <Card className={classes.card}>
             <CardMedia
               className={classes.cardMedia}
               image="https://source.unsplash.com/random"
               title="Image title"
             />
             <CardContent className={classes.cardContent}>
               <Typography gutterBottom variant="h5" component="h2">
                  {card.label}
               </Typography>
               <Typography>
                  {card.description}
               </Typography>
             </CardContent>
             <CardActions>
              <NavLink activeClassName="active" to={"/new/" + card.label}>
                <Button variant="contained" size="small" color="primary">
                 Get started
               </Button>
              </NavLink>
             </CardActions>
           </Card>
         </Grid>
       ))}
     </Grid>
   </Container>
 </div>
  );
}

export default Home;