import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongFormDial from './SongFormDial';
import SongKeySelect from './SongKeySelect';
import SongAvailableNumerals from './SongAvailableNumerals';
import SongContainer from './SongContainer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { AppBar } from '@material-ui/core';

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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SongForm: React.FC = (props) => { 
  
  const classes = useStyles();
  const [songKey, setKey] = React.useState('');
  const [songType, setType] = React.useState('');

  const handleKeyChange = (event:any) => {
    setKey(event.target.value);
  };

  const handleTypeChange = (event:any) => {
    setType(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <DndProvider backend={Backend}>
        
        <Toolbar>
          <SongKeySelect />
          <Divider orientation="vertical" />
          <SongAvailableNumerals />
        </Toolbar>
        
        <Paper>
          <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
              Blowing in the wind
            </Typography>
            <SongContainer />
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