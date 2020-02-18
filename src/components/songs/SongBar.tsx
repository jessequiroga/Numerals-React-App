import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SongBarGridItem from './SongBarGridItem';
import { SongBarModel, Numeral } from '../../data/Models';

export interface BarProps {
    bar : SongBarModel
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DEFAULT_BAR_LENGTH = 12;
const COUNTS_PER_BAR = 4;

const SongBar: React.FC<BarProps> = ({
  bar: bar
}) => {

  function renderBarColumn(numeral: Numeral) {
    return <Grid item xs={3} >{numeral.getValue()}</Grid>
  }

  var rows = [];
  for (var i = 0; i < COUNTS_PER_BAR; i++) {
    rows.push(renderBarColumn(bar.numerals[i]))
  }

  return (
    <Grid container spacing={0}>
      <Grid container xs={12} spacing={0}>
         {rows}
      </Grid>
      <Grid container xs={12} spacing={0}>
          <TextField 
            id="filled-basic" 
            fullWidth
            value={bar.lyrics}
            />
      </Grid>
    </Grid>
  );
}

export default SongBar;