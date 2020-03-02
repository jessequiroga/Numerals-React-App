import React from 'react';
import SongFormDial from './SongFormDial';
import SongGrid from './SongGrid';
import SongTitle from './SongTitle';
import SongConfigForm from './SongConfigForm';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import ShareIcon from '@material-ui/icons/Share';
import { SongModel } from '../../data/Models';
import { SongHandler } from '../../utils/Handlers';
import Button from '@material-ui/core/Button';

export interface SongProps {
  song: SongModel
}

const SongForm: React.FC<SongProps> = ({
  song: songModel,
}) => {

  const [song, setSong] = React.useState<SongModel>(songModel)
 
  const handleSongChange = (handler:SongHandler) => {
    console.log("Song Change Fired", handler)
    handler.handle(song)
    setSong({ ...song })
  };

  const handleClickSave = () =>  {
    var songs = localStorage.getItem('songs');
    var songString = songs ? songs : '[]';
    var parsedSongs = JSON.parse(songString)
    parsedSongs.push(song)
    localStorage.setItem('songs', JSON.stringify(parsedSongs));
  }

  React.useEffect(() => {
    localStorage.setItem('song', JSON.stringify(song));
  }, [song]);


  return (

    <Container maxWidth="sm">
      <DndProvider backend={Backend}>
        <Paper>
          <Container maxWidth="sm">
            <Toolbar>
              <SongTitle title={song.title} titleHandler={handleSongChange} />
              <IconButton onClick={handleClickSave} edge="start" color="inherit" aria-label="menu">
                <SaveIcon />
              </IconButton>
              <Divider orientation="vertical" />

              <SongConfigForm songConfigHandler={handleSongChange} songConfig={song.config} />

              <Divider orientation="vertical" />

              <IconButton edge="start" color="inherit" aria-label="menu">
                <ShareIcon />
              </IconButton>
            </Toolbar>

            <SongGrid song={song} songChangeHandler={handleSongChange} />

          </Container>
        </Paper>
      </DndProvider>
      <Toolbar>
      <Button color="primary" aria-label="verse">
        Verse
      </Button> 
      <Button color="primary" aria-label="chorus">
        Chorus
      </Button>
      <Button color="primary" aria-label="bridge">
        Bridge
      </Button>
        <SongFormDial eventHandler={handleSongChange} />
      </Toolbar>
    </Container>
  );
}

export default SongForm;