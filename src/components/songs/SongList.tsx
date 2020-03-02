import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicIcon from '@material-ui/icons/MusicNote';
import {SongRepository} from '../../data/SongRepository';
import { NavLink } from 'react-router-dom';

const SongList: React.FC = (props) => { 
  
  const SONGS = SongRepository.getSongs()
  
  return (
    <List component="nav" aria-label="main mailbox folders">
        {SONGS.map((song, i) => {        
          return (
            <ListItem button
            key={song.uuid}
            component={NavLink} to={"/song/" + i}
            >
              <ListItemIcon>
                <MusicIcon />
              </ListItemIcon>
              <ListItemText primary={song.title} />
            </ListItem>
          ) 
         })}
    </List>
  );
}

export default SongList;