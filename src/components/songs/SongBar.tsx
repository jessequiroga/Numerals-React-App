import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BarNumeralSelect from './BarNumeralSelect';
import { SongBarModel, BeatModel, SongConfig } from '../../data/Models';
import SongBarEdit from './SongBarEdit';
import { BarLyricHandler } from '../../utils/Handlers';
import Typography from '@material-ui/core/Typography';

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
  const [songBar, setSongBar] = React.useState(bar)
  const [clickedLyric, setClickedLyric] = React.useState(false)
  const [tmpLyric, setTmpLyric] = React.useState('')

  React.useEffect(() => { setSongBar(bar) }, [bar]);    

  const handleSaveClick = (event:any) => {
    var handler = new BarLyricHandler()
    handler.lyric = tmpLyric
    handler.barIndex = barIndex
    songHandler(handler);
    setClickedLyric( ! clickedLyric )
  }

  const handleLyricEdit = (event:any) => {
    setTmpLyric(event.target.value)
  }

  const handleBarLyricClick = (data:any) => {
    setClickedLyric( ! clickedLyric )
  }

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
         {  clickedLyric ?  
            <div>
              <TextField 
              key={"numeral-bar-id-" + barIndex}
              fullWidth
              defaultValue={bar.lyrics ? bar.lyrics : ''}
              onChange={handleLyricEdit} />
              <button onClick={handleSaveClick}>Update</button>
              <button onClick={handleBarLyricClick}>Dismiss</button>
            </div>
            : 
            <Typography onClick={handleBarLyricClick}>
              {bar.lyrics}
            </Typography>
        }
      </Grid>
      <SongBarEdit configHandler={songHandler} barIndex={barIndex} />
    </Grid>
  );
}

export default SongBar;