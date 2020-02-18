import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongFormDial from './SongFormDial';
import SongKeySelect from './SongKeySelect';
import SongGrid from './SongGrid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import {TEST_SONG} from '../../data/Fixtures';
import {SongModel} from '../../data/Models';


const useStyles = makeStyles(theme => ({
  root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(2),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
  },  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  songTitle: {
    marginTop: theme.spacing(2),
  },
}));


const SongForm: React.FC = (props) => { 
  
  const classes = useStyles();
  //const [song, setSong] = React.useState<SongModel>(TEST_SONG)
  var song = TEST_SONG;
  return (
    <Container maxWidth="sm">
      <DndProvider backend={Backend}>

        <Paper>
          <Container maxWidth="sm">
            
            <Toolbar> 
              <Typography variant="h5">
                {song.title}
              </Typography>
              <Divider orientation="vertical" />

              <SongKeySelect />

              <Divider orientation="vertical" />

              <IconButton edge="start" color="inherit" aria-label="menu">
                <ShareIcon />
              </IconButton>
            </Toolbar>

            <SongGrid song={TEST_SONG} />
            
          </Container>
        </Paper>
      </DndProvider>

      <Toolbar>
        <SongFormDial />
      </Toolbar>
    
    </Container>
  );
}

export default SongForm;