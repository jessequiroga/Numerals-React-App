import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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

const SongWriting101: React.FC = (props) => { 
   
  const classes = useStyles();
  return (
   <div>
   <div className={classes.heroContent}>
     <Container maxWidth="sm">
       <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
         Songwriting 101
       </Typography>
       <Typography variant="body1" align="center" color="textPrimary" paragraph>
            Numerals is primarily based off of the the <a href="https://en.wikipedia.org/wiki/Circle_of_fifths">Circle of Fifths</a> and the latent <a href="https://en.wikipedia.org/wiki/Circle_of_fifths">chord progressions</a> they unlock. 
       </Typography>
       <Typography variant="body1" align="center" color="textPrimary" paragraph>
          Realistically, there is no hard and fast rule for creating a song...it's an artisitc endeavor which is impossible to 'program', that said, 
          given all those possibilities that 'next' chord for a verse, chorus, bridge, or just something to go along
          with some guitar strums.
       </Typography>
       <Typography variant="body1" align="center" color="textPrimary" paragraph>
          Enter Numerals, a concept I've implemented privately over the years, but punched up for public consumption. Simply choose the key of your song, and start building out your song...
       </Typography>
       <Typography variant="h4" align="center" color="textSecondary" paragraph>
        So why should I use "Numerals"?
       </Typography>
       <Typography variant="body1" align="center" color="textPrimary" paragraph>
          Numerals takes the the guess work out finding out where songs should go. It exploits the Circle of Fifths to suggest and simply the songwriting process...You need a new bridge, just 
          say you need a Bridge, and your off.
       </Typography>
       <Typography variant="body1" align="center" color="textSecondary" paragraph>
          It may not always make your song better, but it will make you a better song writer. 
       </Typography>
     </Container>
   </div>
 </div>
  );
}

export default SongWriting101;