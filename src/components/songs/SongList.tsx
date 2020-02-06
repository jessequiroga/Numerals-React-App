import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicIcon from '@material-ui/icons/MusicNote';

const SongList: React.FC = (props) => { 
  
  const SONGS = [{"id" : 1, "name" : "Blowin in the wind"}, {"id" : 2, "name" : "No More Mr Niceguy"}]
  
  return (

    <List component="nav" aria-label="main mailbox folders">
        {SONGS.map((song, i) => { 
          return (
            <ListItem button>
              <ListItemIcon>
                <MusicIcon />
              </ListItemIcon>
              <ListItemText primary={song.name} />
            </ListItem>
          ) 
         })}
    </List>
  );
}

export default SongList;