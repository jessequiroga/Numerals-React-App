import React from 'react';
import SongFormDial from './SongFormDial';
import SongGrid from './SongGrid';
import SongConfigForm from './SongConfigForm';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import {SongModel, Numeral, SongConfig} from '../../data/Models';
import {SongFactory} from '../../data/SongFactory';
import {SongRepository} from '../../data/SongRepository';
import { useParams } from 'react-router-dom';


export interface SongProps {
  song: SongModel
}

const SongForm: React.FC<SongProps> = ({
    song: songModel,
}) => { 
  console.log(songModel)
  const [song, setSong] = React.useState<SongModel>(songModel)
  const songFactory = new SongFactory(song.config)

  const handleBarAdd = (barNum: number) => {
    for(var i=0;i<barNum; i++) {
      song.bars.push(songFactory.makeBar())
    }
    setSong({...song})
  };

  const handleNumeralChange = (numeral: Numeral, barIndex:number, beatIndex: number) => {
    song.bars[barIndex].beats[beatIndex].numeral = numeral
    setSong({...song})
  };

  const handleConfigChange = (config: SongConfig) => {
    song.config = config;
    setSong({...song})
  };

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

              <SongConfigForm songConfigHandler={handleConfigChange} songConfig={song.config} />

              <Divider orientation="vertical" />

              <IconButton edge="start" color="inherit" aria-label="menu">
                <ShareIcon />
              </IconButton>
            </Toolbar>

            <SongGrid song={song} numeralChangeHandler={handleNumeralChange} />

          </Container>
        </Paper>
      </DndProvider>
      <Toolbar>
        <SongFormDial eventHandler={handleBarAdd} />
      </Toolbar>
     </Container>
  );
}

export default SongForm;