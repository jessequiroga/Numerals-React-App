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
import { SongModel } from '../../data/Models';
import { SongHandler } from '../../utils/Handlers';

export interface SongProps {
  song: SongModel
}

const SongForm: React.FC<SongProps> = ({
  song: songModel,
}) => {

  const [song, setSong] = React.useState<SongModel>(songModel)
 
  const handleSongChange = (handler:SongHandler) => {
    handler.handle(song)
    setSong({ ...song })
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
        <SongFormDial eventHandler={handleSongChange} />
      </Toolbar>
    </Container>
  );
}

export default SongForm;