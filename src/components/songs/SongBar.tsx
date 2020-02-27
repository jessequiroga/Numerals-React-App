import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BarNumeralSelect from './BarNumeralSelect';
import { SongBarModel, BeatModel, SongConfig } from '../../data/Models';
import SongBarEdit from './SongBarEdit';

export interface BarProps {
    bar : SongBarModel,
    songHandler : any,
    barIndex : number,
    config : SongConfig
}

const SongBar: React.FC<BarProps> = ({
  bar,
  songHandler,
  barIndex,
  config
}) => {

  function renderBarColumn(beat: BeatModel, barIndex: number, beatIndex: number) {
    return <Grid key={"griditem-" + barIndex + "-" + beatIndex} item xs={3} >
              <BarNumeralSelect key={"select-" + barIndex + "-" + beatIndex} config={config} numeralHandler={songHandler} numeral={(beat.numeral) ? beat.numeral: undefined} barIndex={barIndex} beatIndex={beatIndex} />
           </Grid>
  }

  var rows = [];
  for (var i = 0; i < config.bpm; i++) {
    rows.push(renderBarColumn(bar.beats[i], barIndex, i))
  }

  return (
    <Grid container spacing={0}>
      <Grid container spacing={0}>
         {rows}
      </Grid>
      <Grid container spacing={0}>
          <TextField 
            key={"numeral-bar-id-" + barIndex}
            fullWidth
            defaultValue={bar.lyrics ? bar.lyrics : ''}
          />
      </Grid>
      <SongBarEdit configHandler={songHandler} barIndex={barIndex} />
    </Grid>
  );
}

export default SongBar;