import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SongBarGridItem from './SongBarGridItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SongBar: React.FC = (props) => { 
  
  return (
    <Grid container spacing={0}>
      <Grid container xs={12} spacing={0}>
         <SongBarGridItem id="something" key="1-2">
            
         </SongBarGridItem>
      </Grid>
      <Grid container xs={12} spacing={0}>
          <TextField 
            id="filled-basic" 
            label="Verse" 
            fullWidth
            />
      </Grid>
    </Grid>
  );
}

export default SongBar;