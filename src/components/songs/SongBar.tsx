import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BarNumeralSelect from './BarNumeralSelect';
import { SongBarModel, BeatModel, SongConfig } from '../../data/Models';

export interface BarProps {
    bar : SongBarModel,
    numeralHandler : any,
    barIndex : number,
    config : SongConfig
}

const SongBar: React.FC<BarProps> = ({
  bar: bar,
  numeralHandler : numeralHandler,
  barIndex : barIndex,
  config : config
}) => {

  function renderBarColumn(beat: BeatModel, barIndex: number, beatIndex: number) {
    return <Grid item xs={3} >
              <BarNumeralSelect config={config} numeralHandler={numeralHandler} numeral={(beat.numeral) ? beat.numeral: undefined} barIndex={barIndex} beatIndex={beatIndex} />
           </Grid>
  }

  var rows = [];
  for (var i = 0; i < config.bpm; i++) {
    rows.push(renderBarColumn(bar.beats[i], barIndex, i))
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
            defaultValue={bar.lyrics ? bar.lyrics : ''}
          />
      </Grid>
    </Grid>
  );
}

export default SongBar;