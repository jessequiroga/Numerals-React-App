import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongBar from './SongBar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SongContainer: React.FC = (props) => { 

  return (
    <Container maxWidth="sm">
        <SongBar />
        <SongBar />
        <SongBar />
    </Container>
  );
}

export default SongContainer;